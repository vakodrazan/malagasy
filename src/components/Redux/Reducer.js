const initialState = {
  categories: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'CATEGORY_LIST': {
      return {
        ...state,
        categories: action.value,
      };
    }
    default:
      return state;
  }
}
