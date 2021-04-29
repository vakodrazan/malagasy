import * as React from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 30,
    paddingTop: 11,
    paddingBottom: 11,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonText: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 16,
    textTransform: 'uppercase',
  },
  activeButtonText: {
    color: '#fff',
  },
  disabledButtonText: {
    color: '#06B6D4',
  },
  buttonIcon: {
    paddingLeft: 6,
    paddingRight: 6,
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
});

export default function LanguageSwitcherButton({
  primaryText,
  secondaryText,
  name,
  type,
  onPress,
  disabled,
}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.buttonContainer,
          disabled
            ? styles.disabledButtonContainer
            : styles.activeButtonContainer,
        ]}>
        <Text
          style={[
            styles.buttonText,
            disabled ? styles.disabledButtonText : styles.activeButtonText,
          ]}>
          {primaryText}
        </Text>
        <Icon
          name={name}
          type={type}
          style={styles.buttonIcon}
          color={disabled ? '#06B6D4' : '#fff'}
          size={17}
        />
        <Text
          style={[
            styles.buttonText,
            disabled ? styles.disabledButtonText : styles.activeButtonText,
          ]}>
          {secondaryText}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
