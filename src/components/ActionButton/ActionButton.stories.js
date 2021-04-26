import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import ActionButton from './ActionButton';
import { action } from '@storybook/addon-actions';

storiesOf('ActionButton', module)
  .addDecorator(story => <View style={{ padding: 20 }}>{story()}</View>)
  .add('Button with learn', () => (
    <ActionButton 
      text={'Learn'} 
      name={'arrow-right'} 
      type={'material-community'} 
      color={'#06B6D4'}
      onPress={action('learn-button')}
      size={16}
    />
  ))
  .add('Button with pick', () => (
    <ActionButton 
      text={'Pick'} 
      name={'arrow-right'} 
      type={'material-community'} 
      color={'#06B6D4'}
      onPress={action('pick-button')}
      size={16}
    />
  ))
  .add('Button with correct', () => (
    <ActionButton 
      text={'Correct'} 
      name={'check'} 
      type={'material-community'} 
      color={'#06D440'}
      onPress={action('correct-button')}
      size={17.6}
    />
  ))
  .add('Button with wrong', () => (
    <ActionButton 
      text={'Wrong'} 
      name={'close'} 
      type={'material-community'} 
      color={'#D4068E'}
      onPress={action('wrong-button')}
      size={14}
    />
  ))