import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';

export default (MessageComponent) => {
  const MessageWrapper = (props) => {
    return (
      <View style={styles.container}>
        <MessageComponent {...props} />
      </View>
    );
  };

  return memo(MessageWrapper);
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginLeft: 16,
    backgroundColor: '#F3F5F9',
    borderTopRightRadius: 16,
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 4,
    borderTopStartRadius: 16,
    alignSelf: 'flex-start',
    maxWidth: 227,
    padding: 16,
  },
});
