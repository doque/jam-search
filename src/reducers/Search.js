import {
  ENTER_SEARCHTERM,
  REQUEST_SUGGESTIONS,
  RECEIVE_SUGGESTIONS
} from "../actions/Search";

const Search = (
  state = {
    suggestions: [],
    searchTerm: ""
  },
  action
) => {
  switch (action.type) {
    case ENTER_SEARCHTERM:
      return {
        ...state,
        searchTerm: action.searchTerm
      };
    case REQUEST_SUGGESTIONS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_SUGGESTIONS:
      return {
        ...state,
        isFetching: false,
        suggestions: action.suggestions
      };
    default: {
      return state;
    }
  }
};

export default Search;
