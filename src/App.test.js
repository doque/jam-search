import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  ReactDOM.render(<App />, div);
});

it('renders correctly', () => {
  const tree = renderer.create(
    <App />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it.only('fetches data from the server', (done) => {
  const myMock = jest.fn();
  App.prototype.fetchData = myMock;
  const div = document.createElement('div');  
  expect(App.prototype.fetchData.called).toBe(true);
});
