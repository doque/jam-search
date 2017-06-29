import { fetchSuggestions } from "../util/Api";

export const ENTER_SEARCHTERM = "ENTER_SEARCHTERM";
export const REQUEST_SUGGESTIONS = "REQUEST_SUGGESTIONS";
export const RECEIVE_SUGGESTIONS = "RECEIVE_SUGGESTIONS";
export const OFFLINE = "OFFLINE";

export const enteredSearchTerm = (dispatch, searchTerm) => {
  dispatch(requestedSuggestions(dispatch, searchTerm));

  return {
    type: ENTER_SEARCHTERM,
    searchTerm
  };
};

export const requestedSuggestions = (dispatch, searchTerm) => {
  fetchSuggestions(searchTerm)
    .then(json => {
      dispatch(receivedSuggestions(json.suggests));
      dispatch(offline(false));
    })
    .catch(e => {
      dispatch(offline(true));
    });

  return {
    type: REQUEST_SUGGESTIONS
  };
};

export const offline = isOffline => {
  return {
    type: OFFLINE,
    isOffline
  };
};

export const receivedSuggestions = suggestions => {
  return {
    type: RECEIVE_SUGGESTIONS,
    suggestions
  };
};
