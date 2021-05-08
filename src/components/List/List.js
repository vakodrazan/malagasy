import * as React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
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
  learnPhrase,
  isClicked,
  currentTarget,
}) {
  const {correct, wrong} = useSelector(state => state);

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
            text={findCorrect ? correct : findSelectItem ? wrong : text}
            buttonName={
              findCorrect ? 'check' : findSelectItem ? 'close' : buttonName
            }
            type={type}
            color={findCorrect ? '#06D440' : findSelectItem ? '#D4068E' : color}
            onPress={() => onPress(item, index)}
            size={size}
            disabled={disabled}
          />
        );
      }}
      keyExtractor={(item, index) => item.id + index}
    />
  );
}
