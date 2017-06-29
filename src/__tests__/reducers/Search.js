import reducer from "../../reducers/Search";
import * as types from "../../constants/actionTypes";
import { initialState } from "../../reducers/Search";

describe("Search Reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle ENTER_SEARCHTERM", () => {
    expect(
      reducer([], {
        type: types.ENTER_SEARCHTERM,
        searchTerm: "Hello"
      })
    ).toEqual({
      searchTerm: "Hello"
    });
  });

  it("should handle REQUEST_SUGGESTIONS correctly", () => {
    expect(
      reducer([], {
        type: types.REQUEST_SUGGESTIONS
      })
    ).toEqual({
      isFetching: true
    });
  });
});
