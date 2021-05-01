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
}) {
  return (
    <FlatList
      data={data}
      ListHeaderComponent={() => <SectionHeading title={label} />}
      renderItem={({item, index}) => (
        <ListItem
          title={item.name[language.toLowerCase()]}
          text={item.iconButton ? item.iconButton.buttonText : text}
          buttonName={item.iconButton ? item.iconButton.buttonName : buttonName}
          type={type}
          color={item.iconButton ? item.iconButton.iconColor : color}
          onPress={() => onPress(item, index)}
          size={size}
          disabled={disabled}
          buttonRef={learnPhrase === item.id ? buttonRef : null}
        />
      )}
      keyExtractor={(item, index) => item.id + index}
    />
  );
}
