import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import ActionButton from './ActionButton';
storiesOf('ActionButton', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Action button', () => <ActionButton  text={'Action'} name={'arrowright'} type={'antdesign'} />)