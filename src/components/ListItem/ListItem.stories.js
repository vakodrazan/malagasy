import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import ListItemFunction from './ListItem';

storiesOf('ListIten', module)
  .addDecorator(story => <View style={{padding: 20}}>{story()}</View>)
  .add('List item learn', () => (
    <ListItemFunction
      title={'All '}
      text={'Learn'}
      buttonName={'arrow-right'}
      type={'material-community'}
      color={'#06B6D4'}
      onPress={action('learn-button')}
      size={16}
    />
  ))
  .add('List item pick', () => (
    <ListItemFunction
      title={'All '}
      text={'Pick'}
      buttonName={'arrow-right'}
      type={'material-community'}
      color={'#06B6D4'}
      onPress={action('picked-button')}
      size={16}
    />
  ))
  .add('List item and long', () => (
    <ListItemFunction
      title={'An unncessessarly loooong category text is here '}
      text={'Learn'}
      buttonName={'arrow-right'}
      type={'material-community'}
      color={'#06B6D4'}
      onPress={action('learn-button')}
      size={16}
    />
  ))
  .add('List item and correct', () => (
    <ListItemFunction
      title={'two-thousand '}
      text={'Correct'}
      buttonName={'check'}
      type={'material-community'}
      color={'#06D440'}
      onPress={action('checked-button')}
      size={17.6}
    />
  ))
  .add('List item and wrong', () => (
    <ListItemFunction
      title={'1494 '}
      text={'Wrong'}
      buttonName={'close'}
      type={'material-community'}
      color={'#D4068E'}
      onPress={action('wrong-button')}
      size={14}
    />
  ));
