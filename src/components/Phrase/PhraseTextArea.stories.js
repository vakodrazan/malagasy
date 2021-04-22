
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import PhraseTextArea from "./PhraseTextArea"



storiesOf('PhraseTextArea', module)
  .addDecorator(story => <View style={{margin: 23}}>{story()}</View>)
  .add('Uneditable', () => (
    <View>
      <PhraseTextArea 
        value={'You have answered all the questions in this category'} 
        isEditable= {false} 
      />
      <PhraseTextArea 
        value={'roa ambin’ny folo'} 
        isEditable= {false} 
      />
    </View>
  ))
  .add('Editable', () => {
    function Parent({ children }) {
      const [ inputValue, setInputValue ] = React.useState('')
      return <View>{children(inputValue, setInputValue)}</View>
    }

    return (
      <Parent>
        {(inputValue, setInputValue) => (
          <PhraseTextArea 
            value={inputValue}
            placeholderText={'Enter here'}
            onchange={(text) => setInputValue(text)}
            placeholderTextColor={'rgba(17, 24, 39, 0.5)'}
          />
        )}
      </Parent>
    )
  })
