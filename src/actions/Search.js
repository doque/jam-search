import { fetchSuggestions } from "../util/Api";
import * as types from "../constants/actionTypes.js";

export const enteredSearchTerm = (dispatch, searchTerm) => {
  dispatch(requestedSuggestions(dispatch, searchTerm));

  return {
    type: types.ENTER_SEARCHTERM,
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
    type: types.REQUEST_SUGGESTIONS
  };
};

export const offline = isOffline => {
  return {
    type: types.OFFLINE,
    isOffline
  };
};

export const receivedSuggestions = suggestions => {
  return {
    type: types.RECEIVE_SUGGESTIONS,
    suggestions
  };
};
