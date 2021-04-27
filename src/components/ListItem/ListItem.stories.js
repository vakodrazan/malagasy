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
      onPress={action('learn-button')}
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
  ));
