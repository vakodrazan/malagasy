
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import PhraseTextArea from "./PhraseTextArea"



storiesOf('PhraseTextArea', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('UncontrolledInput', () => <PhraseTextArea placeholderText= {'Enter Text'} />)
  .add('ControlledInput', () => <PhraseTextArea placeholderText= {'Enter Text'} />)
