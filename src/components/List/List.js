import * as React from 'react';
import {FlatList} from 'react-native';
import ListItem from '../ListItem/ListItem';
import SectionHeading from '../SectionHeading/SectionHeading';

export default function List({
  data,
  label,
  text,
  buttonName,
  type,
  color,
  onPress,
  size,
  disabled,
  language,
  buttonRef,
  learnPhrase,
  isClicked,
}) {
  return (
    <FlatList
      data={data}
      ListHeaderComponent={() => <SectionHeading title={label} />}
      renderItem={({item, index}) => (
        <ListItem
          title={item.name[language.toLowerCase()]}
          text={isClicked && learnPhrase === item ? 'Correct' : text}
          buttonName={isClicked && learnPhrase === item ? 'check' : buttonName}
          type={type}
          color={isClicked && learnPhrase === item ? '#06D440' : color}
          onPress={() => onPress(item, index)}
          size={size}
          disabled={disabled}
          buttonRef={learnPhrase === item ? buttonRef : null}
        />
      )}
      keyExtractor={(item, index) => item.id + index}
    />
  );
}
