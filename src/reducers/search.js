import {
  ENTER_SEARCHTERM,
  SUGGESTIONS_RECEIVED,
  SUGGESTIONS_REQUESTED
} from "../actions/";

const suggestions = (
  state = {
    isFetching: false,
    suggestions: [],
    searchTerm: ""
  },
  action
) => {
  switch (action.type) {
    case ENTER_SEARCHTERM:
      return { ...state, searchTerm };
    case SUGGESTIONS_RECEIVED:
      return {
        ...state,
        isFetching: false,
        suggestions: action.suggestions
      };
    case SUGGESTIONS_REQUESTED:
      return {
        ...state,
        isFetching: true
      };
    default: {
      return state;
    }
  }
};

export default suggestions;
