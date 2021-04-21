
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import NextButton from './NextButton';
import { action } from '@storybook/addon-actions';


storiesOf('NextButton', module)
  .addDecorator(story => <View style={{ paddingTop: 60}}>{story()}</View>)
  .add('Active', () => (
      <NextButton 
            text= {'Next'} 
            accessibilityLabel={'Tap next'}
            onPress={action("Clicked-next")}
        />
  ))
  .add('Active and long', () => (
      <NextButton 
            text= {'Any text here'} 
            accessibilityLabel={'Tap next'}
            onPress={action("Clicked-next")}
        />
  ))
  .add('Disabled', () => (
      <NextButton 
            text= {'Add'} 
            accessibilityLabel={'Tap next'}
            disabled={true}
        />
  ))
  .add('Disabled and long', () => (
      <NextButton 
            text= {'Enter any word'} 
            accessibilityLabel={'Tap next'}
            disabled={true}
        />
  ))
