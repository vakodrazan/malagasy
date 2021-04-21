
import * as React from 'react';
import {TextInput, SafeAreaView, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    height: 100,
    marginVertical: 0,
    marginHorizontal: 'auto',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    borderWidth: 1,
  },
  input: {
    color: '#111827',
  },
  textarea: {
    color: '#111827',
    maxWidth: 360,
    marginHorizontal: 'auto',
    fontSize: 20,
    lineHeight: 24.3,
  },
});
export default function PhraseTextArea({
  phrase,
  editable,
  onChange = () => null,
}) {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={editable ? styles.input : styles.textarea}
        value={phrase}
        editable={editable}
        onChangeText={onChange}
        multiline={true}
        placeholder={'Enter text'}
      />
    </SafeAreaView>
  );
}