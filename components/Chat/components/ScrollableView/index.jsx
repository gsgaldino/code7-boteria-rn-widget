import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Messages from './components/Messages';

import { styles } from './styles';

function ScrollableView() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Messages />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ScrollableView;
