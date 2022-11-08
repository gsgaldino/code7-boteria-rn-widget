import React from 'react';
import { TextInput, View, Image } from 'react-native';
import { styles } from './styles';

import sendIcon from '../../../../assets/send_icon.png';

function Input() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite algo ..."
        placeholderTextColor="#979AA5"
        style={styles.input}
      />
      <Image source={sendIcon} style={styles.image} />
    </View>
  );
}

export default Input;
