import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';
import ToolButton from './ToolButton';

storiesOf('ToolButton', module)
  .addDecorator(story => <View style={{padding: 20}}>{story()}</View>)
  .add('Add', () => (
    <ToolButton name={'plus'} type={'material-community'} size={14} />
  ))
  .add('Seen', () => (
    <ToolButton name={'check'} type={'material-community'} size={17.6} />
  ))
  .add('Learnt', () => (
    <ToolButton name={'check-all'} type={'material-community'} size={23.25} />
  ))
  .add('Back to previous', () => (
    <ToolButton name={'chevron-left'} type={'material-community'} />
  ))
  .add('Switch Mode', () => (
    <ToolButton
      name={'brightness-6'}
      type={'material-community'}
      size={22.62}
    />
  ));
