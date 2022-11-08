import React, { useEffect, useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Message from './components/Messages';

import socketio from 'socket.io-client';

import { styles } from './styles';

const SOCKET_URL = 'http://localhost:3335';
const botId = '62ec1ac218ba8f42452383a6';

function ScrollableView() {
  const [incomingMessage, setIncomingMessage] = useState(null);

  const startNewSession = (client) => {
    client.emit('subscribe', {
      botId,
      isPreview: true,
    });
  };

  useEffect(() => {
    const client = socketio(SOCKET_URL);
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
      console.log('MESSAGE', data);
    });

    // start new session
    client.emit('subscribe', { botId });

    client.on('subscribe-response', (data) => {
      console.log('SUBSCRIBE RESPONSE', data);
      handleStartConversation(data?.id);
    });
  }, [botId])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Message />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ScrollableView;
