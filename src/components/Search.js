import React from "react";
import { connect } from "react-redux";

import { enteredSearchTerm } from "../actions/search";

//import Suggestions from "./Suggestions";
import SearchForm from "./SearchForm";

const Search = ({ searchTerm, isFetching, suggestions, changeHandler }) =>
  <div class="Search">
    <SearchForm searchTerm={searchTerm} changeHandler={changeHandler} />
    {/*<Suggestions suggestions={suggestions} clickHandler={clickHandler} />*/}
  </div>;

const mapStateToProps = ({ searchTerm, isFetching, suggestions }) => ({
  isFetching,
  searchTerm,
  suggestions
});

const mapDispatchToProps = dispatch => ({
  changeHandler: searchTerm => dispatch(enteredSearchTerm(searchTerm))
  //  clickHandler: item => dispatch(selectedItem(item))
});

const SearchConnected = connect(mapStateToProps, mapDispatchToProps)(Search);
export default SearchConnected;
