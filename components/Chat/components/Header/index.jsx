import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import { useIsChatOpen } from '../../../../context/IsChatOpen';

import closeIcon from '../../../../assets/close_icon.png';

import { styles } from './styles';

function Header() {
  const { isChatOpen, toggleIsChatOpen } = useIsChatOpen();

  const onClose = () => !!isChatOpen && toggleIsChatOpen();

  return (
    <View style={[styles.container, styles.wrapper]}>
      <Text style={styles.title}>
        Bot title
      </Text>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.imageContainer}>
          <Image source={closeIcon} style={styles.image} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default Header;
