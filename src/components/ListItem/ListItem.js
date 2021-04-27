import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';

export default function ListItemFunction({key, title}) {
  return (
    <SafeAreaView>
      <Text>{title}</Text>
      <ListItem key={key}>
        <ListItem.Content>
          <ListItem.Title>{title}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </SafeAreaView>
  );
}
