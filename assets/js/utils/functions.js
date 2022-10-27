//
const getCharacters = async (page) =>
  await (await fetch(`${API_ENDPOINT}/character?page=${page}`)).json();
const getLocations = async (page) =>
  await (await fetch(`${API_ENDPOINT}/location?page=${page}`)).json();

const getEpisodes = async () =>
  (await (await fetch(`${API_ENDPOINT}/episode`)).json()).results;

const writePrefetchedList = (selector, stringData) => {
  const element = document.querySelector(selector);
  element.innerHTML = stringData;
};
