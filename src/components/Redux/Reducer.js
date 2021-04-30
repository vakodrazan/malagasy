const initialState = {
  categories: {},
  language: 'en',
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'CATEGORY_LIST': {
      return {
        ...state,
        categories: action.payload,
      };
    }
    default:
      return state;
  }
}
