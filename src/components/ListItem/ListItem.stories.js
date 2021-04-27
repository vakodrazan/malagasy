import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import ListItemFunction from './ListItem';

storiesOf('ListIten', module)
  .addDecorator(story => <View style={{padding: 20}}>{story()}</View>)
  .add('List item', () => (
    <ListItemFunction
      title={'All'}
      text={'Learn'}
      buttonName={'arrow-right'}
      type={'material-community'}
      color={'#06B6D4'}
      onPress={action('learn-button')}
      size={16}
    />
  ));
