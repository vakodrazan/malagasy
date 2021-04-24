
import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import SectionHeading from './SectionHeading';

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 30,
        paddingBottom: 15,
        paddingLeft: 23,
        paddingLeft: 23,
    }
})

storiesOf('SectionHeading', module)
  .addDecorator(story => <View style={styles.wrapper}>{story()}</View>)
  .add('Section heading short', () => <SectionHeading title= {'Category:'} />)
  .add('Section heading long', () => <SectionHeading title= {'The phrase in Malagasy:'}/>)