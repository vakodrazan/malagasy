import * as React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import LanguageSwitcherButton from '../LanguageSwitcherButton/LanguageSwitcherButton';
import ToolButton from '../ToolButton/ToolButton';
import {styles} from '../HomeScreen/HomeScreen';
import SectionHeading from '../SectionHeading/SectionHeading';
import PhraseTextArea from '../PhraseTextArea/PhraseTextArea';

const categoryStyles = StyleSheet.create({
  headingCategory: {
    flexDirection: 'row',
  },
  headingCategoryText: {},
});

export default function LearningScreen({route, navigation}) {
  const {language} = useSelector(state => state);
  const item = route.params.findItem;
  console.log(item);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.toolBar}>
        <ToolButton
          onPress={() => navigation.navigate('HomeScreen')}
          name={'chevron-left'}
          type={'material-community'}
        />
        <ToolButton
          onPress={() => console.log('switch-mode-button')}
          name={'brightness-6'}
          type={'material-community'}
          size={22.62}
        />
        <LanguageSwitcherButton
          primaryText={'EN'}
          secondaryText={'MG'}
          name="swap-horizontal"
          type="material-community"
          onPress={() => console.log('Switch-language')}
        />
      </View>
      <View style={categoryStyles.headingCategory}>
        <SectionHeading title="Category: " />
        <Text>{item.name[language]}</Text>
      </View>
      <PhraseTextArea editable={false} />
    </SafeAreaView>
  );
}
