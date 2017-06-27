require("es6-promise").polyfill();
require("isomorphic-fetch");

function dataFetcher(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(e => console.log(e));
}
export { dataFetcher };
