import { fetchSuggestions } from "../util/Api";

export const ENTER_SEARCHTERM = "ENTER_SEARCHTERM";
export const REQUEST_SUGGESTIONS = "REQUEST_SUGGESTIONS";
export const RECEIVE_SUGGESTIONS = "RECEIVE_SUGGESTIONS";

export const enteredSearchTerm = (dispatch, searchTerm) => {
  dispatch(requestedSuggestions(dispatch, searchTerm));

  return {
    type: ENTER_SEARCHTERM,
    searchTerm
  };
};

export const requestedSuggestions = (dispatch, searchTerm) => {
  fetchSuggestions(searchTerm).then(json => {
    dispatch(receivedSuggestions(json.suggests));
  });

  return {
    type: REQUEST_SUGGESTIONS
  };
};

export const receivedSuggestions = suggestions => {
  return {
    type: RECEIVE_SUGGESTIONS,
    suggestions
  };
};
