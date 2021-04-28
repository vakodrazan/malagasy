import * as React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    paddingBottom: 15,
  },
  headingText: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    color: '#111827',
  },
});

export default function SectionHeading({title}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>{title}</Text>
    </SafeAreaView>
  );
}
