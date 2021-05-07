import * as React from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#06B6D4',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});

export const switchLanguage = language => {
  const dispatch = useDispatch();
  dispatch({type: 'SHOW_NEXT_BUTTON', payload: 'mg'});
};

export default function ToolButton({name, type, size, onPress}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Icon name={name} type={type} color="#fff" size={size} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
