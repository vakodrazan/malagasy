import * as React from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default function LanguageSwitcherButton({primaryText, secondaryText}) {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text>{primaryText}</Text>
        <Icon name="swap-horizontal" type="material-community" />
        <Text>{secondaryText}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
