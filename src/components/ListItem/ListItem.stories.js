import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import ListItem from './ListItem';

storiesOf('ListIten', module)
  .addDecorator(story => <View style={{padding: 20}}>{story()}</View>)
  .add('List item learn', () => (
    <ListItem
      title={'All '}
      text={'Learn'}
      buttonName={'arrow-right'}
      type={'material-community'}
      color={'#06B6D4'}
      onPress={action('learn-button')} // Nice job using the storybook actions, would you be willing to present how they work to the class on the next project?
      size={16}
    />
  ))
  .add('List item pick', () => (
    <ListItem
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
    <ListItem
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
    <ListItem
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
    <ListItem
      title={'1494 '}
      text={'Wrong'}
      buttonName={'close'}
      type={'material-community'}
      color={'#D4068E'}
      onPress={action('wrong-button')}
      size={14}
    />
  ))
  .add('List item and disabled', () => (
    <ListItem
      title={'two-thousand '}
      text={'Correct'}
      buttonName={'check'}
      type={'material-community'}
      color={'#06D440'}
      size={17.6}
      disabled={true}
    />
  ));
