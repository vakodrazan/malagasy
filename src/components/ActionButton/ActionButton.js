import * as React from 'react';

import { 
    Text, 
    SafeAreaView, 
    TouchableOpacity, 
    StyleSheet,
    View, 
} from 'react-native';

export default function ActionButton({ text }) {
    return (
        <SafeAreaView>
            <TouchableOpacity>
                <Text>{text}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}