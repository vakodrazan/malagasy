import * as React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

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
  const {language, phraseList, categoryPhrase, learnPhrase} = useSelector(
    state => state,
  );
  const dispatch = useDispatch();
  const itemCategory = route.params.findItem;

  const filterCategory = itemCategory.phrasesIds.map(id =>
    phraseList.filter(phrase => phrase.id === id),
  );

  React.useEffect(() => {
    dispatch({type: 'DISPLAY_CATEGORY_PHRASE', payload: filterCategory});
  }, []);

  renderLearningPhrase(categoryPhrase);

  function renderLearningPhrase(item) {
    // console.log(item);
    const randomOption = item[Math.floor(Math.random() * item.length)];
    const randomOption1 = item[Math.floor(Math.random() * item.length)];
    const randomOption2 = item[Math.floor(Math.random() * item.length)];
    const randomOption3 = item[Math.floor(Math.random() * item.length)];

    // dispatch({type: 'DISPLAY_LEARN_PHRASE', payload: randomOption});
  }

  console.log(learnPhrase);

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
        <Text>{itemCategory.name[language]}</Text>
      </View>
      <PhraseTextArea editable={false} />
    </SafeAreaView>
  );
}
