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
  currentTarget,
}) {
  return (
    <FlatList
      data={data}
      ListHeaderComponent={() => <SectionHeading title={label} />}
      renderItem={({item, index}) => {
        const findCorrect = isClicked && learnPhrase === item;
        const findSelectItem =
          isClicked && currentTarget !== learnPhrase && currentTarget === item;
        return (
          <ListItem
            title={item.name[language.toLowerCase()]}
            text={findCorrect ? 'Correct' : findSelectItem ? 'Wrong' : text}
            buttonName={
              findCorrect ? 'check' : findSelectItem ? 'close' : buttonName
            }
            type={type}
            color={findCorrect ? '#06D440' : findSelectItem ? '#D4068E' : color}
            onPress={() => onPress(item, index)}
            size={size}
            disabled={disabled}
            buttonRef={learnPhrase === item ? buttonRef : null}
          />
        );
      }}
      keyExtractor={(item, index) => item.id + index}
    />
  );
}
