import React from 'react';
import { Image, TouchableWithoutFeedback, View } from 'react-native';
import widgetImage from '../../assets/widget.png';

import { useIsChatOpen } from '../../context/IsChatOpen';

import { styles } from './styles';

function Widget() {
  const { toggleIsChatOpen, isChatOpen } = useIsChatOpen();

  const onPress = () => toggleIsChatOpen();

  const isChatOpenClass = isChatOpen ? styles.opened : null;

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={onPress}
      >
        <Image
          source={widgetImage}
          style={[styles.image, isChatOpenClass]}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

export default Widget;
