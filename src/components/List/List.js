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
  language,
}) {
  return (
    <FlatList
      data={data}
      ListHeaderComponent={() => <SectionHeading title={label} />}
      renderItem={({item}) => (
        <ListItem
          title={item.name[language.toLowerCase()]}
          text={text}
          buttonName={buttonName}
          type={type}
          color={color}
          onPress={onPress}
          size={size}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
}
