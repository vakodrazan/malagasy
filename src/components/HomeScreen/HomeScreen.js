import * as React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

import List from '../List/List';
import ToolButton from '../ToolButton/ToolButton';
import LanguageSwitcherButton from '../LanguageSwitcherButton/LanguageSwitcherButton';

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
  const {categories} = useSelector(state => state);

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
          primaryText={'EN'}
          secondaryText={'MG'}
          name="swap-horizontal"
          type="material-community"
          onPress={() => alert('Switch-language')}
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
        label={'Select a category: '}
        text={'Learn'}
        buttonName={'arrow-right'}
        type={'material-community'}
        color={'#06B6D4'}
        size={16}
        language={'en'}
        onPress={onPress}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
