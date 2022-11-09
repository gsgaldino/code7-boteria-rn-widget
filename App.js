import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { Widget, Chat } from './components';

import IsChatOpenProvider from './context/IsChatOpen';
import MessagesProvider from './context/Messages';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />

      <IsChatOpenProvider>
        <MessagesProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
          >
            <Widget />
            <Chat />
          </KeyboardAvoidingView>
        </MessagesProvider>
      </IsChatOpenProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
});
