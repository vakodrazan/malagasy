// components/Task.js
import * as React from 'react';
import { Text, SafeAreaView, TextInput, StyleSheet } from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function PhraseTextArea({ label, placeholderText, ...restProps }) {
  const [ inputValue, setInputValue ] = React.useState('Hello')
    const styles = StyleSheet.create({
        container: {
          marginLeft: 23,
          marginRight: 23,
        },
        input: {
          borderColor: '#E5E5E5',
          borderStyle: 'solid',
          borderWidth: 1,
          borderRadius: 3,
          textAlign: 'center',
          height: 100,
          color: '#111827'
        },
    })

    const handleChange = (e) => {
      console.log(e.target.value);
      setInputValue(e.target.value)
    }
  console.log(label);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder={placeholderText}
        value={inputValue}
        onChange={handleChange}
        {...restProps}
      />
    </SafeAreaView>
  );
}