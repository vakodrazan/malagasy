import * as React from 'react';
import { SafeAreaView, TextInput, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
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
    paddingLeft: 56,
    paddingRight: 56,
    paddingTop: 20,
    paddingBottom: 21,
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 'normal',
  },
})

export default function PhraseTextArea({ 
  placeholderText, 
  placeholderTextColor, 
  isEditable, 
  value, 
  onchange 
}) {

  return (
    <SafeAreaView>
      <TextInput 
        style={styles.input} 
        multiline={true}
        numberOfLines={3}

        placeholder={placeholderText}
        placeholderTextColor={placeholderTextColor}
        editable={isEditable}
        value={value}
        onChangeText={onchange}
      />
    </SafeAreaView>
  );
}