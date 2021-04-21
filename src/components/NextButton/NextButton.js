import * as React from 'react';
import { 
    SafeAreaView, 
    StyleSheet,
    TouchableOpacity, 
    Text,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    activeButtonContainer: {
        backgroundColor: '#06B6D4',
        borderRadius: 30,
        paddingLeft: 27,
        paddingRight: 27,
        paddingTop: 11,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '600',
    },
    disabledButtonContainer: {
        backgroundColor: '#fff',
        borderColor: '#06B6D4',
        borderRadius: 30,
        paddingLeft: 27,
        paddingRight: 27,
        paddingTop: 11,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '600',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#06B6D4',
    },
    activebuttonText: {
        fontSize: 16,
        lineHeight: 19,
        color: '#fff'
    },
    disabledbuttonText: {
        fontSize: 16,
        lineHeight: 19,
        color: '#06B6D4'
    },
})

export default function NextButton({ 
    text, 
    accessibilityLabel, 
    onPress, 
    disabled 
}) {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity 
                style={ disabled 
                    ? styles.disabledButtonContainer 
                    : styles.activeButtonContainer
                }
                accessibilityLabel={accessibilityLabel}
                onPress={onPress}
                disabled={disabled}
            >
                <Text 
                    style={disabled ? styles.disabledbuttonText : styles.activebuttonText}
                >{text}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}