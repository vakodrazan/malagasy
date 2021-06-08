export default function switchLanguage(dispatch, language) {
  // This should not be in the components directory
  if (language === 'en') {
    dispatch({type: 'SWITCH_LANGUAGE', payload: 'mg'});
    dispatch({type: 'UDDATE_PRIMARY_LANGUAGE', payload: 'MG'});
    dispatch({type: 'UDDATE_SECONDARY_LANGUAGE', payload: 'EN'});
    dispatch({type: 'UPDATE_CORRECT_LANGUAGE', payload: 'Marina'});
    dispatch({type: 'UDDATE_WRONG_LANGUAGE', payload: 'Diso'});
    dispatch({type: 'UDDATE_PICK_LANGUAGE', payload: 'Safidio'});
    dispatch({type: 'UDDATE_LEARN_LANGUAGE', payload: 'Hianatra'});
  } else {
    dispatch({type: 'SWITCH_LANGUAGE', payload: 'en'});
    dispatch({type: 'UDDATE_SECONDARY_LANGUAGE', payload: 'MG'});
    dispatch({type: 'UDDATE_PRIMARY_LANGUAGE', payload: 'EN'});
    dispatch({type: 'UDDATE_SECONDARY_LANGUAGE', payload: 'MG'});
    dispatch({type: 'UPDATE_CORRECT_LANGUAGE', payload: 'Correct'});
    dispatch({type: 'UDDATE_WRONG_LANGUAGE', payload: 'Wrong'});
    dispatch({type: 'UDDATE_PICK_LANGUAGE', payload: 'Pick'});
    dispatch({type: 'UDDATE_LEARN_LANGUAGE', payload: 'Learn'});
  }
} 
