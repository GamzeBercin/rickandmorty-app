const getCharacters = async () =>
  (await (await fetch(`${API_ENDPOINT}/character`)).json()).results;

const getLocations = async () =>
  (await (await fetch(`${API_ENDPOINT}/location`)).json()).results;

const getEpisodes = async () =>
  (await (await fetch(`${API_ENDPOINT}/episode`)).json()).results;

const writePrefetchedList = (selector, stringData) => {
  const element = document.querySelector(selector);
  element.innerHTML = stringData;
};
