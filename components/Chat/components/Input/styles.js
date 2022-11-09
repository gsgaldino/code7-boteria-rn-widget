import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 8,
    position: 'relative',
  },
  input: {
    backgroundColor: '#F3F5F9',
    borderRadius: 16,
    height: 64,
    padding: 20,
  },
  icon: {
    width: 31,
    height: 28,
    position: 'absolute',
    right: 20,
    top: 0,
    transform: [
      { translateY: 28 }
    ]
  },
  image: {
    flex: 1,
  }
});
