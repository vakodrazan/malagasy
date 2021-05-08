import categoryList from '../../data/categories.json';
import phrasesList from '../../data/phrases.json';

const initialState = {
  categories: categoryList.categories,
  language: 'en',
  primaryLanguage: 'EN',
  secondaryLanguage: 'MG',
  learnPhrase: {},
  answerOptions: [],
  phraseList: phrasesList.phrases,
  learntPhrases: [],
  isClicked: false,
  iconColor: '#06B6D4',
  buttonName: 'arrow-right',
  currentTarget: {},
  correct: 'Correct',
  wrong: 'Wrong',
  pick: 'Pick',
  learn: 'Learn',
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'DISPLAY_LEARN_PHRASE': {
      return {
        ...state,
        learnPhrase: action.payload,
      };
    }
    case 'DISPLAY_ALL_ANSWER_OPTION': {
      return {
        ...state,
        answerOptions: action.payload,
      };
    }
    case 'SHOW_NEXT_BUTTON': {
      return {
        ...state,
        isClicked: action.payload,
      };
    }
    case 'UPDATE_LEARNT_PHRASES': {
      return {
        ...state,
        learntPhrases: action.payload,
      };
    }
    case 'UPDATE_ICON_NAME': {
      return {
        ...state,
        buttonName: action.payload,
      };
    }
    case 'UPDATE_ICON_COLOR': {
      return {
        ...state,
        iconColor: action.payload,
      };
    }
    case 'UPDATE_CURRENT_TARGET_ITEM': {
      return {
        ...state,
        currentTarget: action.payload,
      };
    }
    case 'SWITCH_LANGUAGE': {
      return {
        ...state,
        language: action.payload,
      };
    }
    case 'UDDATE_PRIMARY_LANGUAGE': {
      return {
        ...state,
        primaryLanguage: action.payload,
      };
    }
    case 'UDDATE_SECONDARY_LANGUAGE': {
      return {
        ...state,
        secondaryLanguage: action.payload,
      };
    }
    case 'UPDATE_CORRECT_LANGUAGE': {
      return {
        ...state,
        correct: action.payload,
      };
    }
    case 'UDDATE_WRONG_LANGUAGE': {
      return {
        ...state,
        wrong: action.payload,
      };
    }
    case 'UDDATE_PICK_LANGUAGE': {
      return {
        ...state,
        pick: action.payload,
      };
    }
    case 'UDDATE_LEARN_LANGUAGE': {
      return {
        ...state,
        learn: action.payload,
      };
    }
    default:
      return state;
  }
}
