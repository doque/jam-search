import React from "react";
import { connect } from "react-redux";

import { enteredSearchTerm } from "../actions/search";

import Suggestions from "./Suggestions";
import SearchForm from "./SearchForm";
import Loading from "./Loading";

const Search = ({ searchTerm, isFetching, suggestions, changeHandler }) =>
  <div>
    <SearchForm searchTerm={searchTerm} changeHandler={changeHandler} />
    {isFetching && <Loading />}
    <Suggestions suggestions={suggestions} />
  </div>;

const mapStateToProps = ({ searchTerm, isFetching, suggestions }) => ({
  isFetching,
  searchTerm,
  suggestions
});

const mapDispatchToProps = dispatch => ({
  changeHandler: searchTerm => dispatch(enteredSearchTerm(dispatch, searchTerm))
  //  clickHandler: item => dispatch(selectedItem(item))
});

const SearchConnected = connect(mapStateToProps, mapDispatchToProps)(Search);
export default SearchConnected;
