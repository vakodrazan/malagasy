import * as React from 'react';

import { 
    Text, 
    SafeAreaView, 
    TouchableOpacity, 
    StyleSheet,
    View, 
} from 'react-native';  
import { Icon } from 'react-native-elements'


export default function ActionButton({ text, name, type }) {
    return (
        <SafeAreaView>
            <TouchableOpacity>
                <Text>{text}</Text>
                <Icon name={name} type={type} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}