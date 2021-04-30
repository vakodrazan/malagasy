import phrasesList from '../../data/phrases.json';

const initialState = {
  categories: {},
  language: 'en',
  learnPhrase: {},
  answerOptions: [],
  phraseList: phrasesList.phrases,
  categoryPhrase: [],
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
    // case 'DISPLAY_CORRECT_ANSWER': {
    //   return {
    //     ...state,
    //     learnPhrase: action.payload,
    //   };
    // }
    default:
      return state;
  }
}
