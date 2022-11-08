import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 80,
    height: 81,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  image: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  opened: {
    transform: [
      { scaleX: -1 },
    ]
  },
});
