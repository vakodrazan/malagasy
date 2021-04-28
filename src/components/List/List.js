import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, SafeAreaView} from 'react-native';

export default function List({label}) {
  return (
    <SafeAreaView>
      <Text>{label}</Text>
    </SafeAreaView>
  );
}
