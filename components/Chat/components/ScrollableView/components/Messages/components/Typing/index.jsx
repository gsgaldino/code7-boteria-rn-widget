import React, { useRef, useEffect } from 'react';
import { View, Animated } from 'react-native';

import { styles } from './styles';

const TWO_HUNDRED_MILLISECONDS = 200;
const ONE_SECOND = 1500;

function Typing() {
  const dots = [0, 1, 2].map((dotNumber) => useRef(new Animated.Value(dotNumber)).current);

  const bounce = () => {
    const duration = TWO_HUNDRED_MILLISECONDS;

    Animated.sequence([
      Animated.timing(dots[0], {
        toValue: -4,
        duration,
        useNativeDriver: true,
      }),
      Animated.timing(dots[0], {
        toValue: 0,
        duration,
        useNativeDriver: true,
      }),
      Animated.timing(dots[1], {
        toValue: -4,
        duration,
        useNativeDriver: true,
      }),
      Animated.timing(dots[1], {
        toValue: 0,
        duration,
        useNativeDriver: true,
      }),
      Animated.timing(dots[2], {
        toValue: -4,
        duration,
        useNativeDriver: true,
      }),
      Animated.timing(dots[2], {
        toValue: 0,
        duration,
        useNativeDriver: true,
      })
    ]).start();
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      bounce();
    }, ONE_SECOND);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.wrapper}>

      {dots.map((dotAnimation) => (
        <Animated.View
          style={[styles.dot, { transform: [
            { translateY: dotAnimation },
          ] }]}
        />
      ))}

    </View>
  );
}

export default Typing;
