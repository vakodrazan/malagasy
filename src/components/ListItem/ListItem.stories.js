import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';
import ListItemFunction from './ListItem';
storiesOf('ListIten', module)
  .addDecorator(story => <View style={{padding: 20}}>{story()}</View>)
  .add('List item', () => <ListItemFunction key={'all'} title={'All'} />);
