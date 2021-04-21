import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import PhraseTextArea from './PhraseTextArea';
function Edit() {
  const [text, setText] = React.useState('');
  return (
    <PhraseTextArea
      phrase={text}
      editable={true}
      onChange={input => setText(input)}
    />
  );
}
storiesOf('PhraseTextarea', module)
  .addDecorator(story => <View style={{ padding: 23}}>{story()}</View>)
  .add('editable input', () => <Edit />)
  .add('not editable phrase', () => (
    <PhraseTextArea phrase={"roa ambin'ny folo"} editable={false} />
  ))
  .add('not editable and longer', () => (
    <PhraseTextArea
      phrase={
        'You have answered all the questions in this category'
      }
      editable={false}
    />
  ));