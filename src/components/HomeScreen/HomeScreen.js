import * as React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import List from '../List/List';
import ToolButton from '../ToolButton/ToolButton';
import LanguageSwitcherButton from '../LanguageSwitcherButton/LanguageSwitcherButton';
import switchLanguage from '../SwitchLanguages/SwitchLanguages'; // use consistent casing (props lowerCase in this case)
// This file should be in a separate screens folder, not in components
export const styles = StyleSheet.create({
  container: {
    marginRight: 23,
    marginLeft: 23,
  },
  toolBar: {
    flexDirection: 'row',
    paddingBottom: 56,
    paddingTop: 35,
  },
});

const HomeScreen = ({navigation}) => {
  const {
    categories,
    language,
    primaryLanguage,
    secondaryLanguage,
    learn,
  } = useSelector(state => state);

  const dispatch = useDispatch();

  function onPress(item) {
    navigation.navigate('DisplayPhrases', {
      findItem: item,
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.toolBar}>
        <ToolButton
          onPress={() => alert('Add-button')}
          name={'plus'}
          type={'material-community'}
          size={14}
        />
        <LanguageSwitcherButton
          primaryText={primaryLanguage}
          secondaryText={secondaryLanguage}
          name="swap-horizontal"
          type="material-community"
          onPress={() => switchLanguage(dispatch, language)}
        />
        <ToolButton
          onPress={() => alert('Seen-button')}
          name={'check'}
          type={'material-community'}
          size={17.6}
        />
        <ToolButton
          onPress={() => alert('Learnt-button')}
          name={'check-all'}
          type={'material-community'}
          size={23.25}
        />
        <ToolButton
          onPress={() => alert('switch-mode-button')}
          name={'brightness-6'}
          type={'material-community'}
          size={22.62}
        />
      </View>
      <List
        data={categories}
        label={language === 'en' ? 'Select a category:' : 'Mifidiana sokajy:'}
        text={learn}
        buttonName={'arrow-right'}
        type={'material-community'}
        color={'#06B6D4'}
        size={16}
        language={language}
        onPress={onPress}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
