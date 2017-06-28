export const ENTER_SEACHTERM = "ENTER_SEACHTERM";
export const REQUEST_SUGGESTIONS = "REQUEST_SUGGESTIONS";
export const RECEIVE_SUGGESTION = "RECEIVE_SUGGESTIONS";

export const enteredSearchTerm = searchTerm => {
  return {
    type: ENTER_SEACHTERM,
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
    type: RECEIVE_SUGGESTION,
    suggestions
  };
};
