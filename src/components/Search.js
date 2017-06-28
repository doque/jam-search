import React, { Component } from "react";
import { connect } from "react-redux";

import Suggestions from "./Suggestions";
import SearchForm from "./SearchForm";

const Search = ({ searchTerm, suggestions, changeHandler }) =>
  <div>
    <SearchForm searchTerm={searchTerm} changeHandler={changeHandler} />
    <Suggestions
      suggestions={suggestions}
      clickHandler={this.clickHandler.bind(this)}
    />
  </div>;

const mapStateToProps = ({ isFetching, suggestions }) => ({
  isFetching,
  suggestions
});

const mapDispatchToProps = dispatch => ({
  handleInputChanged: searchTerm => dispatch(enteredSearchTerm(searchTerm))
});

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
