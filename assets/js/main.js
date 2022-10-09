const cardsElement = document.querySelector("#cards");
async function fetchCharacters() {
  const fetchedCharacters = await (
    await fetch("https://rickandmortyapi.com/api/character")
  ).json();
  console.log(fetchedCharacters);
  const allDataString = fetchedCharacters.results
    .map(
      (item) => `<div class="card">
    <!-- Cover -->
    <div class="card__cover">
      <img
        src="${item.image}"
        alt=""
      />
    </div>
  
    <!-- Content -->
    <div class="card__content">
      <div class="card__content-item">${item.name}</div>
      <div class="card__content-item">${item.gender}</div>
      <div class="card__content-item">${item.status}</div>
      <div class="card__content-item">${item.origin.name}</div>
    </div>
  </div>`
    )
    .join("");
  cardsElement.innerHTML = allDataString;
}
fetchCharacters();
