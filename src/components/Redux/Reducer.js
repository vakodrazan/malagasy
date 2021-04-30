import phrasesList from '../../data/phrases.json';

const initialState = {
  categories: {},
  language: 'en',
  learnPhrase: {},
  answerOptions: [],
  phraseList: phrasesList.phrases,
  categoryPhrase: [],
  isClicked: false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'CATEGORY_LIST': {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case 'DISPLAY_LEARN_PHRASE': {
      return {
        ...state,
        learnPhrase: action.payload,
      };
    }
    case 'DISPLAY_CATEGORY_PHRASE': {
      return {
        ...state,
        categoryPhrase: action.payload,
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
    default:
      return state;
  }
}
