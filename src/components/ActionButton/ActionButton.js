import * as React from 'react';

import { 
    Text, 
    SafeAreaView, 
    TouchableOpacity, 
    StyleSheet,
} from 'react-native';  
import { Icon } from 'react-native-elements'

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonText: {
        paddingRight: 12,
        fontSize: 16,
        lineHeight: 19,
        fontWeight: '600',
        textAlign: 'right',
        fontStyle: 'normal',
    }
})


export default function ActionButton({ text, name, type, color, onPress }) {
    return (
        <SafeAreaView>
            <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={onPress}
            >
                <Text style={[styles.buttonText, {color: `${color}`}]}>{text}</Text>
                <Icon name={name} type={type} color={color} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}