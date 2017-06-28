import React from "react";
import ReactDOM from "react-dom";
import { render } from "enzyme";
import renderer from "react-test-renderer";

import { Search } from "../../containers/Search";
import Loading from "../../components/Loading";
import SuggestItem from "../../components/SuggestItem";

const defaultProps = {
  suggestions: []
};

const renderWithProps = (props = defaultProps) => {
  return renderer.create(<Search {...props} />).toJSON();
};

it("renders without crashing", () => {
  const wrapper = renderWithProps();
  expect(wrapper).toMatchSnapshot();
});

it("renders the loading spinner when isFetching is true", () => {
  const wrapper = renderWithProps({
    ...defaultProps,
    isFetching: true
  });
  expect(wrapper).toMatchSnapshot();
});

it("does not render the loading spinner when isFetching is false", () => {
  const wrapper = renderWithProps({
    ...defaultProps,
    isFetching: false
  });

  expect(wrapper).toMatchSnapshot();
});

it("renders the correct number of SuggestItems", () => {
  const data = require("../../__mocks__/Search");
  const wrapper = renderWithProps({ suggestions: data.suggests });
  expect(wrapper).toMatchSnapshot();
});
