import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements';
import ActionButton from '../ActionButton/ActionButton';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d3d3d3',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  listContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTitle: {
    color: '#111827',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '400',
    paddingRight: 11,
    flex: 1,
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
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ListItem>
        <ListItem.Content style={styles.listContent}>
          <ListItem.Title
            style={styles.itemTitle}
            numberOfLines={1}
            ellipsizeMode="tail">
            {title}
          </ListItem.Title>
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
