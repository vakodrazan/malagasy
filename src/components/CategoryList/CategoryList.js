import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import categoryList from '../../data/categories.json';
import List from '../List/List';

export default function CategoryList() {
  const {categories} = useSelector(state => state);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({type: 'CATEGORY_LIST', value: categoryList.categories});
  }, []);

  return (
    <SafeAreaView>
      <List
        data={categories}
        label={'Select a category: '}
        text={'Learn'}
        buttonName={'arrow-right'}
        type={'material-community'}
        color={'#06B6D4'}
        onPress={alert('learn-button')}
        size={16}
        language={'en'}
      />
    </SafeAreaView>
  );
}
