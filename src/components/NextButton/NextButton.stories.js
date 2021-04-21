
import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import NextButton from './NextButton';
import { action } from '@storybook/addon-actions';

const ActiveButton = ({ text }) => (
    <NextButton 
        text= {text} 
        accessibilityLabel={'Tap next'}
        onPress={action("Clicked-next")}
    />
);

const DisabledButton = ({ text }) => (
    <NextButton 
        text= {text} 
        accessibilityLabel={'Tap next'}
        disabled={true}
    />
)

storiesOf('NextButton', module)
  .addDecorator(story => <View style={{ paddingTop: 60}}>{story()}</View>)
  .add('Active', () => <ActiveButton text= {'Next'} />)
  .add('Active and long', () => <ActiveButton text= {'Any text here Any text here Any text here'}/>)
  .add('Disabled', () => <DisabledButton text= {'Add'} />)
  .add('Disabled and long', () => <DisabledButton text= {'Enter any word Enter any word Enter any word '} />)
