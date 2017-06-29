import {
  ENTER_SEARCHTERM,
  REQUEST_SUGGESTIONS,
  RECEIVE_SUGGESTIONS,
  OFFLINE
} from "../actions/Search";

const initialState = {
  suggestions: [],
  isFetching: false,
  searchTerm: "",
  isOffline: false
};

const Search = (state = initialState, action) => {
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
    case OFFLINE:
      return {
        ...state,
        isOffline: action.isOffline
      };
    default: {
      return state;
    }
  }
};

export default Search;
