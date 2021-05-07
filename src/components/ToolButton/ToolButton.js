import * as React from 'react';
import {SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
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

export function switchLanguage(dispatch, language) {
  if (language === 'en') {
    dispatch({type: 'SWITCH_LANGUAGE', payload: 'mg'});
    dispatch({type: 'UDDATE_PRIMARY_LANGUAGE', payload: 'MG'});
    dispatch({type: 'UDDATE_SECONDARY_LANGUAGE', payload: 'EN'});
  } else {
    dispatch({type: 'SWITCH_LANGUAGE', payload: 'en'});
    dispatch({type: 'UDDATE_SECONDARY_LANGUAGE', payload: 'MG'});
    dispatch({type: 'UDDATE_PRIMARY_LANGUAGE', payload: 'EN'});
    dispatch({type: 'UDDATE_SECONDARY_LANGUAGE', payload: 'MG'});
  }
}

export default function ToolButton({name, type, size, onPress}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Icon name={name} type={type} color="#fff" size={size} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
