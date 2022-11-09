import React from 'react';

import { View } from 'react-native';
import messageComponentByType from './utils/messageComponentByType';

import { useMessages } from '../../../../../../context/Messages';

function Messages() {
  const { messages } = useMessages();

  return (
    <View>
      {messages.map((msg) => {
        const Message = messageComponentByType(msg?.type);

        return (
          <Message message={msg.message} />
        );
      })}
    </View>
  );
}

export default Messages;
