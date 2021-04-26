import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';
import ToolButton from './ToolButton';
import {action} from '@storybook/addon-actions';

storiesOf('ToolButton', module)
  .addDecorator(story => <View style={{padding: 20}}>{story()}</View>)
  .add('Add', () => (
    <ToolButton
      onPress={action('Add-button')}
      name={'plus'}
      type={'material-community'}
      size={14}
    />
  ))
  .add('Seen', () => (
    <ToolButton
      onPress={action('Seen-button')}
      name={'check'}
      type={'material-community'}
      size={17.6}
    />
  ))
  .add('Learnt', () => (
    <ToolButton
      onPress={action('Learnt-button')}
      name={'check-all'}
      type={'material-community'}
      size={23.25}
    />
  ))
  .add('Back to previous', () => (
    <ToolButton
      onPress={action('Back-to-previous-button')}
      name={'chevron-left'}
      type={'material-community'}
    />
  ))
  .add('Switch Mode', () => (
    <ToolButton
      onPress={action('switch-mode-button')}
      name={'brightness-6'}
      type={'material-community'}
      size={22.62}
    />
  ));
