function retrieveData(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(e => console.error("OFFLINE", e));
}
export { retrieveData };
