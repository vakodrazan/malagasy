
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import PhraseTextArea from "./PhraseTextArea"



storiesOf('PhraseTextArea', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Uneditable', () => <PhraseTextArea placeholderText= {'Enter Text'} text={'rua ambin’ny folo'} isEditable= {false} />)
  .add('Editable', () => <PhraseTextArea placeholderText= {'Enter Text'} />)
