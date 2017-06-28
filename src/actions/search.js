export const ENTER_SEARCHTERM = "ENTER_SEARCHTERM";
export const REQUEST_SUGGESTIONS = "REQUEST_SUGGESTIONS";
export const RECEIVE_SUGGESTIONS = "RECEIVE_SUGGESTIONS";

export const enteredSearchTerm = searchTerm => {
  return {
    type: ENTER_SEARCHTERM,
    searchTerm
  };
};

export const requestedSuggestions = () => {
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
