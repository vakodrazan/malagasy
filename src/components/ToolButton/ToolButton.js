import * as React from 'react';
import { Text, SafeAreaView } from 'react-native';

export default function ToolButton({text}) {
    return (
        <SafeAreaView>
            <Text>{text}</Text>
        </SafeAreaView>
    )
}