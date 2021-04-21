import * as React from 'react';
import { Text, SafeAreaView, TextInput } from 'react-native';

export default function MyComponent({ name, placeholderText }) {
    return (
        <SafeAreaView style={{backgroundColor: "blue", padding: 20}}>
            <TextInput style={{backgroundColor:'#fff', borderRadius: 3, padding: 20}} placeholder={placeholderText} />
        </SafeAreaView>
    )
}