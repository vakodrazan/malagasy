import * as React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import categoryList from '../../data/categories.json';
import List from '../List/List';
import ToolButton from '../ToolButton/ToolButton';
import LanguageSwitcherButton from '../LanguageSwitcherButton/LanguageSwitcherButton';

const styles = StyleSheet.create({
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

const Home = ({navigation}) => {
  const {categories} = useSelector(state => state);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({type: 'CATEGORY_LIST', value: categoryList.categories});
  }, []);

  console.log(categories[0]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.toolBar}>
        <ToolButton
          onPress={console.log('Add-button')}
          name={'plus'}
          type={'material-community'}
          size={14}
        />
        <LanguageSwitcherButton
          primaryText={'EN'}
          secondaryText={'MG'}
          name="swap-horizontal"
          type="material-community"
          onPress={console.log('Switch-language')}
        />
        <ToolButton
          onPress={console.log('Seen-button')}
          name={'check'}
          type={'material-community'}
          size={17.6}
        />
        <ToolButton
          onPress={console.log('Learnt-button')}
          name={'check-all'}
          type={'material-community'}
          size={23.25}
        />
        <ToolButton
          onPress={console.log('switch-mode-button')}
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
      />
    </SafeAreaView>
  );
};

export default Home;
