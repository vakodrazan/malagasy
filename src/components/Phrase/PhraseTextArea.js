import * as React from 'react';
import { Text, SafeAreaView, TextInput } from 'react-native';

export default function MyComponent({ label, placeholderText }) {
    return (
        <SafeAreaView style={{backgroundColor: "blue", padding: 20}}>
            <Text>{label}</Text>
            <TextInput placeholder={placeholderText} />
        </SafeAreaView>
    )
}