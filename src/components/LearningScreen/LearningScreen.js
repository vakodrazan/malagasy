import * as React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import LanguageSwitcherButton from '../LanguageSwitcherButton/LanguageSwitcherButton';
import ToolButton from '../ToolButton/ToolButton';
import {styles} from '../HomeScreen/HomeScreen';
import SectionHeading from '../SectionHeading/SectionHeading';
import PhraseTextArea from '../PhraseTextArea/PhraseTextArea';
import List from '../List/List';

const categoryStyles = StyleSheet.create({
  headingCategory: {
    flexDirection: 'row',
  },
  headingCategoryText: {},
});

export default function LearningScreen({route, navigation}) {
  const {
    language,
    phraseList,
    categoryPhrase,
    learnPhrase,
    answerOptions,
  } = useSelector(state => state);
  const dispatch = useDispatch();
  const itemCategory = route.params.findItem;

  const filterCategory = phraseList.filter(phrase =>
    itemCategory.phrasesIds.some(item => item === phrase.id),
  );

  React.useEffect(() => {
    dispatch({type: 'DISPLAY_CATEGORY_PHRASE', payload: filterCategory});
    renderLearningPhrase(filterCategory);
  }, []);

  function renderLearningPhrase(item) {
    const option = item[Math.floor(Math.random() * item.length)];
    const option1 = item[Math.floor(Math.random() * item.length)];
    const option2 = item[Math.floor(Math.random() * item.length)];
    const option3 = item[Math.floor(Math.random() * item.length)];
    dispatch({type: 'DISPLAY_LEARN_PHRASE', payload: option});
    const allOptions = [option, option1, option2, option3].sort(() => {
      return 0.3 - Math.random();
    });
    dispatch({type: 'DISPLAY_LEARN_PHRASE', payload: option});
    dispatch({type: 'DISPLAY_ALL_ANSWER_OPTION', payload: allOptions});
  }

  const convertLanguage = language == 'en' ? 'mg' : 'en';

  const onPress = () => {
    const correctOption = learnPhrase.name[language];
    console.log(correctOption);
  };

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
      <PhraseTextArea
        editable={false}
        phrase={learnPhrase.name ? learnPhrase.name[convertLanguage] : null}
      />

      {answerOptions ? (
        <List
          data={answerOptions}
          label={'Select a category: '}
          text={'Pick'}
          buttonName={'arrow-right'}
          type={'material-community'}
          color={'#06B6D4'}
          size={16}
          language={'en'}
          onPress={onPress}
        />
      ) : null}
    </SafeAreaView>
  );
}
