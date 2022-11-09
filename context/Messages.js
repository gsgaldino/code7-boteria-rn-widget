import React, { useContext, createContext, useState, useEffect } from 'react';
import socketio from 'socket.io-client';

const SOCKET_URL = 'http://localhost:3335';
const botId = '62ec1ac218ba8f42452383a6';
const client = socketio(SOCKET_URL, {
  reconnectionDelay: 1000,
  reconnection:true,
  reconnectionAttempts: 10,
  transports: ['websocket'],
  agent: false,
  upgrade: false,
  rejectUnauthorized: false
});

const MessagesContext = createContext(null);

export default function MessagesContextProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [sessionId, setSessionId] = useState(null);

  const addMessage = (message) => setMessages((prevMessages) => {
    return [
      ...prevMessages.filter((message) => message?.type !== 'TYPING'),
      message,
    ];
  });

  const handleSubmitMessage = ({ message, type, ext }) => {
    const isMedia = type !== 'TEXT';
    client.emit('message', {
      botId: botId,
      message,
      isMedia,
      ext,
      isPreview: true,
      id: sessionId,
      botChannel: 'webchat',
    });

    setMessages((prevState) => [
      ...prevState,
      { from: 'user', message, type },
    ]);
  };

  const startNewSession = (client) => {
    client.emit('subscribe', {
      botId,
      isPreview: true,
    });
  };

  useEffect(() => {
    const handleStartConversation = (sessionId) => {
      client.emit('start', {
        botId: botId,
        id: sessionId,
        channel: 'webchat',
        contactNumber: '11988887777',
      });
    };

    client.on('connect', (data) => {
      startNewSession(client);
    });

    client.on('message', (data) => {
      addMessage({ ...data, from: 'bot' });
    });

    // start new session
    client.emit('subscribe', { botId });

    // response with bot and session data
    client.on('subscribe-response', (data) => {
      handleStartConversation(data?.id);
      setSessionId(data?.id);
    });

    client.on("connect_error", (err) => {
      console.log(`connect_error due to ${err.message}`);
    });
  }, [botId]);

  return (
    <MessagesContext.Provider
      value={{ messages, addMessage, handleSubmitMessage }}
    >
      {children}
    </MessagesContext.Provider>
  );
}

export const useMessages = () => useContext(MessagesContext);
