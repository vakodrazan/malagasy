import * as React from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#06B6D4',
    borderRadius: 30,
    paddingTop: 11,
    paddingBottom: 11,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttontext: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 16,
    textTransform: 'uppercase',
  },
  buttonIcon: {
    paddingLeft: 6,
    paddingRight: 6,
  },
});

export default function LanguageSwitcherButton({
  primaryText,
  secondaryText,
  name,
  type,
  onPress,
}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        <Text style={styles.buttontext}>{primaryText}</Text>
        <Icon
          name={name}
          type={type}
          style={styles.buttonIcon}
          color="#fff"
          size={17}
        />
        <Text style={styles.buttontext}>{secondaryText}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
