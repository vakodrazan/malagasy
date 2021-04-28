import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';

import categories from '../../data/categories.json';

export default function CategoryList() {
  console.log(categories);
  return (
    <SafeAreaView>
      <Text>Category List</Text>
    </SafeAreaView>
  );
}
