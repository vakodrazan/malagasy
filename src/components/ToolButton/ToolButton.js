import * as React from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#06B6D4',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});

export default function ToolButton({name, type, size}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}>
        <Icon name={name} type={type} color="#fff" size={size} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}