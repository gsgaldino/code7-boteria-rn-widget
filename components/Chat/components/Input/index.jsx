import React, { useRef } from 'react';
import { TextInput, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import { messageTypes } from '../../../../constants/messageTypes';
import { useMessages } from '../../../../context/Messages';

import sendIcon from '../../../../assets/send_icon.png';

function Input() {
  const inputRef = useRef(null);
  const { handleSubmitMessage } = useMessages();

  const onSend = () => {
    const text = inputRef.current.value;
    if (!text) return;
    else {
      handleSubmitMessage({
        type: messageTypes.TEXT,
        message: text,
      });
      inputRef.current.value = '';
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite algo ..."
        placeholderTextColor="#979AA5"
        ref={inputRef}
        style={styles.input}
      />

      <TouchableOpacity
        onPress={onSend}
        style={styles.icon}
      >
        <Image source={sendIcon} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}

export default Input;
