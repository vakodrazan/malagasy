// components/Task.js
import * as React from 'react';
import { Text, SafeAreaView, TextInput, StyleSheet } from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function PhraseTextArea({ label, text, placeholderText, isEditable, ...restProps }) {
  const [ inputValue, setInputValue ] = React.useState(text)
  const [ isFocus, setIsFocus ] = React.useState(false)

    const styles = StyleSheet.create({
      container: {
        marginLeft: 23,
        marginRight: 23,
      },
      input: {
        borderColor: '#E5E5E5',
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 3,
        width: '100%',
        textAlign: 'center',
        height: 100,
        color: '#111827',
        padding: 23,
        fontSize: 20,
        lineHeight: 24,
        fontWeight: 'normal',
      },
    })

  return (
    <SafeAreaView style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder={placeholderText}
        placeholderTextColor={'rgba(17, 24, 39, 0.5)'}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        editable={isEditable}
        {...restProps}
      />
    </SafeAreaView>
  );
}