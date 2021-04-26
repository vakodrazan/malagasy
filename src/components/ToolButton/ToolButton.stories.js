import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import ToolButton from './ToolButton';


storiesOf('ToolButton', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('button', () => <ToolButton text= {'Button'}/>)