import Search from "../../reducers/Search";
import * as types from "../../actions/Search";
import { initialState } from "../../reducers/Search";

describe("Search Reducer", () => {
  it("should return the initial state", () => {
    expect(Search(undefined, {})).toEqual(initialState);
  });

  it("should handle ENTER_SEARCHTERM", () => {
    expect(
      Search([], {
        type: types.ENTER_SEARCHTERM,
        searchTerm: "Hello"
      })
    ).toEqual({
      searchTerm: "Hello"
    });
  });

  it("should handle REQUEST_SUGGESTIONS correctly", () => {
    expect(
      Search([], {
        type: types.REQUEST_SUGGESTIONS
      })
    ).toEqual({
      isFetching: true
    });
  });
});
