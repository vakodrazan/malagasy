
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import MyComponent from './MyComponent';



storiesOf('My component', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('firstname', () => <MyComponent placeholderText= {'Enter first name'}/>)
  .add('lastname', () => <MyComponent placeholderText= {'Enter last name'} />);
