const locationsElement = document.querySelector("#locations-card");
async function fetchLocations() {
  const fetchedLocations = await (
    await fetch("https://rickandmortyapi.com/api/location")
  ).json();
  console.log(fetchedLocations);
  const allDataString = fetchedLocations.results
    .map(
      (item) =>
        `<div class="card">
        <!-- Cover -->
        <img class="card__cover" src="https://i2-prod.mirror.co.uk/incoming/article12626254.ece/ALTERNATES/s615b/Planets.jpg"></img>
    
        <!-- Content -->
        <div class="card__content">${item.name}</div>
        <div class="card__content">${item.type}</div>
        <div class="card__content">${item.dimension}</div>
       
    </div>`
    )
    .join("");
  locationsElement.innerHTML = allDataString;
}
fetchLocations();
