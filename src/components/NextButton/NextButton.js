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
    buttonContainer: {
        borderRadius: 30,
        paddingLeft: 27,
        paddingRight: 27,
        paddingTop: 11,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeButtonContainer: {
        backgroundColor: '#06B6D4',
    },
    disabledButtonContainer: {
        backgroundColor: '#fff',
        borderColor: '#06B6D4',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#06B6D4',
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 19,
        fontWeight: '600',
    },
    activebuttonText: {
        color: '#fff'
    },
    disabledbuttonText: {
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
                style={[
                    styles.buttonContainer, 
                    disabled 
                        ? styles.disabledButtonContainer 
                        : styles.activeButtonContainer
                ]}
                accessibilityLabel={accessibilityLabel}
                onPress={onPress}
                disabled={disabled}
            >
                <Text 
                    style={[
                        styles.buttonText, 
                        disabled 
                            ? styles.disabledbuttonText 
                            : styles.activebuttonText
                    ]}
                >{text}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}