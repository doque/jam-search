import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import sinon from "sinon";

import Search from "./Search";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Search />, div);
});

it("renders correctly", () => {
  const tree = renderer.create(<Search />).toJSON();
  expect(tree).toMatchSnapshot();
});
