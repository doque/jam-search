import React from "react";
import { connect } from "react-redux";

import { enteredSearchTerm } from "../actions/Search";

import Suggestions from "../components/Suggestions";
import SearchForm from "../components/SearchForm";
import Loading from "../components/Loading";

const Search = ({ searchTerm, isFetching, suggestions, changeHandler }) =>
  <div>
    <SearchForm searchTerm={searchTerm} changeHandler={changeHandler} />
    {isFetching && <Loading />}
    <Suggestions suggestions={suggestions} />
  </div>;

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  changeHandler: searchTerm => dispatch(enteredSearchTerm(dispatch, searchTerm))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
export { Search };
