import * as React from 'react';
import { Text, SafeAreaView } from 'react-native';

export default function SectionHeading({ title }) {

  return (
    <SafeAreaView >
      <Text>{title}</Text>
    </SafeAreaView>
  );
}