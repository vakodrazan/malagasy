
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import SectionHeading from './SectionHeading';


storiesOf('SectionHeading', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Heading', () => <SectionHeading title= {'Heading'}/>)