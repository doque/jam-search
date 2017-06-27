import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import sinon from "sinon";
import App from "./App";

it("renders without crashing", () => {
  ReactDOM.render(<App />, div);
});

it("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it.only("fetches data from the server", done => {
  const wrapper = shallow(<App />);
  setTimeout(() => {
    console.log(wrapper.html());
    done();
  }, 500);
});
