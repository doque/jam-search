import * as types from "../constants/actionTypes";

const initialState = {
  suggestions: [],
  isFetching: false,
  searchTerm: "",
  isOffline: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ENTER_SEARCHTERM:
      return {
        ...state,
        searchTerm: action.searchTerm
      };
    case types.REQUEST_SUGGESTIONS:
      return {
        ...state,
        isFetching: true
      };
    case types.RECEIVE_SUGGESTIONS:
      return {
        ...state,
        isFetching: false,
        suggestions: action.suggestions
      };
    case types.OFFLINE:
      return {
        ...state,
        isOffline: action.isOffline
      };
    default: {
      return state;
    }
  }
};

export { initialState };
export default reducer;
