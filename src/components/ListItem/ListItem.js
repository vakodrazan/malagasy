import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements';
import ActionButton from '../ActionButton/ActionButton';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d3d3d3',
  },
  listContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default function ListItemFunction({
  title,
  text,
  buttonName,
  type,
  color,
  onPress,
  size,
}) {
  return (
    <TouchableOpacity style={styles.container}>
      <ListItem>
        <ListItem.Content style={styles.listContent}>
          <ListItem.Title>{title}</ListItem.Title>
          <ActionButton
            text={text}
            name={buttonName}
            type={type}
            color={color}
            onPress={onPress}
            size={size}
          />
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );
}
