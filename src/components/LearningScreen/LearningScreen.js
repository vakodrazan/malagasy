import * as React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import LanguageSwitcherButton from '../LanguageSwitcherButton/LanguageSwitcherButton';
import ToolButton from '../ToolButton/ToolButton';
import {styles} from '../HomeScreen/HomeScreen';
import SectionHeading from '../SectionHeading/SectionHeading';
import PhraseTextArea from '../PhraseTextArea/PhraseTextArea';
import List from '../List/List';
import NextButton from '../NextButton/NextButton';
import switchLanguage from '../SwitchLanguages/SwitchLanguages';

const categoryStyles = StyleSheet.create({
  headingCategory: {
    flexDirection: 'row',
  },
  categorySection: {
    marginBottom: 37,
  },
  headingCategoryText: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    color: '#111827',
    paddingLeft: 6,
    flex: 1,
    marginBottom: 30,
  },
});

export default function LearningScreen({route, navigation}) {
  const {
    language,
    phraseList,
    learnPhrase,
    answerOptions,
    isClicked,
    buttonName,
    iconColor,
    learntPhrases,
    currentTarget,
    primaryLanguage,
    secondaryLanguage,
    pick,
  } = useSelector(state => state);
  const dispatch = useDispatch();
  const itemCategory = route.params.findItem;
  const convertLanguage = language === 'en' ? 'mg' : 'en';

  React.useEffect(() => {
    renderLearningPhrase(phraseList);
  }, []);

  function renderLearningPhrase(phrases) {
    const phrasesIds = itemCategory.phrasesIds;
    let indexes = new Set([Math.floor(Math.random() * phrasesIds.length)]);
    while (indexes.size < 4) {
      indexes.add(Math.floor(Math.random() * phrasesIds.length));
    }
    indexes = [...indexes];

    const filterPhrases = phrases.filter(phrase =>
      learntPhrases.some(item => item.id !== phrase.id),
    );

    const answerOption = index => {
      return phrases.find(phrase => phrase.id === phrasesIds[indexes[index]]);
    };

    const answerOption1 =
      learntPhrases > 0
        ? filterPhrases.find(item => item.id === phrasesIds[indexes[0]])
        : answerOption(0);

    const answerOptions = [
      answerOption1,
      answerOption(1),
      answerOption(2),
      answerOption(3),
    ].sort(() => {
      return 0.5 - Math.random();
    });

    dispatch({type: 'DISPLAY_LEARN_PHRASE', payload: answerOption1});
    dispatch({type: 'DISPLAY_ALL_ANSWER_OPTION', payload: answerOptions});
  }

  const onPress = currentTarget => {
    const newListOfLearntPhrase = [...learntPhrases, learnPhrase];
    if (currentTarget.id === learnPhrase.id) {
      dispatch({type: 'UPDATE_LEARNT_PHRASES', payload: newListOfLearntPhrase});
    }

    dispatch({type: 'SHOW_NEXT_BUTTON', payload: true});
    dispatch({type: 'UPDATE_CURRENT_TARGET_ITEM', payload: currentTarget});
  };

  const handleClickNext = () => {
    renderLearningPhrase(phraseList);
    dispatch({type: 'SHOW_NEXT_BUTTON', payload: false});
    dispatch({type: 'UPDATE_ICON_COLOR', payload: '#06B6D4'});
    dispatch({type: 'UPDATE_ICON_NAME', payload: 'arrow-right'});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={categoryStyles.categorySection}>
        <View style={styles.toolBar}>
          <ToolButton
            onPress={() => navigation.navigate('HomeScreen')}
            name={'chevron-left'}
            type={'material-community'}
          />
          <ToolButton
            onPress={() => alert('switch-mode-button')}
            name={'brightness-6'}
            type={'material-community'}
            size={22.62}
          />
          <LanguageSwitcherButton
            primaryText={primaryLanguage}
            secondaryText={secondaryLanguage}
            name="swap-horizontal"
            type="material-community"
            onPress={() => switchLanguage(dispatch, language)}
          />
        </View>
        <View style={categoryStyles.headingCategory}>
          <SectionHeading title={language === 'en' ? 'Category:' : 'Sokajy:'} />
          <Text style={categoryStyles.headingCategoryText}>
            {itemCategory.name[language]}
          </Text>
        </View>
        <PhraseTextArea
          editable={false}
          phrase={
            learnPhrase.name ? learnPhrase.name[convertLanguage] : 'Loading...'
          }
        />
      </View>
      {answerOptions ? (
        <List
          data={answerOptions}
          label={
            language === 'en' ? 'Pick a solution:' : 'Misafidiana vahaolana: '
          }
          type={'material-community'}
          size={16}
          language={language}
          onPress={onPress}
          disabled={isClicked}
          text={pick}
          buttonName={buttonName}
          color={iconColor}
          learnPhrase={learnPhrase}
          isClicked={isClicked}
          currentTarget={currentTarget}
        />
      ) : null}
      {isClicked && (
        <NextButton
          text={language === 'en' ? 'Next' : 'Manaraka'}
          accessibilityLabel={'Tap next'}
          onPress={handleClickNext}
        />
      )}
    </SafeAreaView>
  );
}
