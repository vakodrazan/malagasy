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

const categoryStyles = StyleSheet.create({
  headingCategory: {
    flexDirection: 'row',
  },
  categorySection: {
    paddingBottom: 37,
  },
  headingCategoryText: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    color: '#111827',
  },
});

export default function LearningScreen({route, navigation}) {
  const {
    language,
    phraseList,
    categoryPhrase,
    learnPhrase,
    answerOptions,
    isClicked,
    buttonName,
    iconColor,
    buttonText,
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
      return 0.5 - Math.random();
    });
    const newData = allOptions.map(item => {
      return {
        ...item,
        iconButton: {
          buttonName,
          buttonText,
          iconColor,
        },
      };
    });
    dispatch({type: 'DISPLAY_LEARN_PHRASE', payload: option});
    dispatch({type: 'DISPLAY_ALL_ANSWER_OPTION', payload: newData});
  }

  const convertLanguage = language === 'en' ? 'mg' : 'en';

  const buttonRef = React.useRef();
  const onPress = (currentTarget, index) => {
    const correctOption = learnPhrase.id;
    const userGuess = currentTarget.id;
    dispatch({type: 'SHOW_NEXT_BUTTON', payload: true});
    dispatch({type: 'SELECTED_ITEM', payload: currentTarget});
    const findClickedOption = answerOptions.find(
      option => option.id === userGuess,
    );
    const findCorrectOption = answerOptions.find(
      option => option.id === correctOption,
    );
    if (correctOption === userGuess) {
      findClickedOption.iconButton = {
        buttonText: 'Correct',
        buttonName: 'check',
        iconColor: '#06D440',
      };
    } else {
      findClickedOption.iconButton = {
        buttonText: 'Wrong',
        buttonName: 'close',
        iconColor: '#D4068E',
      };
      findCorrectOption.iconButton = {
        buttonText: 'Correct',
        buttonName: 'check',
        iconColor: '#06D440',
      };
    }
  };

  const handleClickNext = () => {
    renderLearningPhrase(categoryPhrase);
    dispatch({type: 'SHOW_NEXT_BUTTON', payload: false});
    dispatch({type: 'UPDATE_BUTTON_NAME', payload: 'Pick'});
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
          <Text style={categoryStyles.headingCategoryText}>
            {itemCategory.name[language]}
          </Text>
        </View>
        <PhraseTextArea
          editable={false}
          phrase={learnPhrase.name ? learnPhrase.name[convertLanguage] : null}
        />
      </View>
      {answerOptions ? (
        <List
          data={answerOptions}
          label={'Pick a solution: '}
          type={'material-community'}
          size={16}
          language={'en'}
          onPress={onPress}
          learnPhrase={learnPhrase.id}
          disabled={isClicked}
          buttonRef={buttonRef}
        />
      ) : null}
      {isClicked && (
        <NextButton
          text={'Next'}
          accessibilityLabel={'Tap next'}
          onPress={handleClickNext}
        />
      )}
    </SafeAreaView>
  );
}
