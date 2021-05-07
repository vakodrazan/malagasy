import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ActionButton from '../ActionButton/ActionButton';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 16,
    paddingTop: 17,
    paddingBottom: 17,
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

export default function ListItem({
  title,
  text,
  buttonName,
  type,
  color,
  onPress,
  size,
  disabled,
  value,
}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      value={value}
      disabled={disabled}>
      <Text style={styles.itemTitle} numberOfLines={1} ellipsizeMode="tail">
        {title}
      </Text>
      <ActionButton
        text={text}
        name={buttonName}
        type={type}
        color={color}
        onPress={onPress}
        size={size}
      />
    </TouchableOpacity>
  );
}
