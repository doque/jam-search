function fetchSuggestions(searchTerm) {
  const url = `https://jameda.localtunnel.me/suche.jameda-elements.de/what-new?query=${searchTerm}`;

  return fetch(url)
    .then(response => response.json())
    .catch(e => console.error("Probably offline?", e));
}

export { fetchSuggestions };
