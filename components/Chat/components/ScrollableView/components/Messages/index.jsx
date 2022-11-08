import React from 'react';

import { View } from 'react-native';
import Typing from './components/Typing';
import wrapMessage from './utils/wrapMessage';

function Message() {
  const Message = wrapMessage(Typing);

  return (
    <View>
      <Message />
    </View>
  );
}

export default Message;
