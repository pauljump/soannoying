const data = window.SO_ANNOYING_DATA;
const cards = document.querySelector("#cards");
const filters = document.querySelector(".filters");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const totalObservations = document.querySelector("#totalObservations");
const cityList = document.querySelector("#cityList");
const cityPanelTop = document.querySelector("#cityPanelTop");
const cityCards = document.querySelector("#cityCards");

const buckets = ["All", ...new Set(data.publishedFinals.map((item) => item.bucket ?? "Everyday"))].sort((a, b) => {
  if (a === "All") return -1;
  if (b === "All") return 1;
  return a.localeCompare(b);
});

let activeFilter = "All";
let activeCityId = data.cities[0]?.id;

totalObservations.textContent = data.totalObservations.toLocaleString();

function renderCityList() {
  cityList.replaceChildren();
  for (const city of data.cities) {
    const button = document.createElement("button");
    button.className = `city-tab${city.id === activeCityId ? " active" : ""}`;
    button.type = "button";
    button.dataset.cityId = city.id;
    button.innerHTML = `<strong></strong><span>${city.finalCount} annoyances</span>`;
    button.querySelector("strong").textContent = city.name;
    cityList.append(button);
  }
}

function renderCity() {
  const city = data.cities.find((item) => item.id === activeCityId);
  if (!city) return;
  cityPanelTop.innerHTML = `<div><p class="kicker">Published city list</p><h3></h3><p>${city.finalCount} annoyances · ${city.sourcePages} frozen source pages</p></div>`;
  cityPanelTop.querySelector("h3").textContent = city.name;
  const matches = city.finals;
  cityCards.replaceChildren();
  for (const item of matches) {
    const card = document.createElement("article");
    card.className = "city-card";
    const top = document.createElement("div");
    top.className = "card-top";
    const scope = document.createElement("span");
    scope.className = "pill";
    scope.textContent = city.name;
    const evidence = document.createElement("span");
    evidence.className = "source";
    evidence.textContent = `${item.evidence.length} source${item.evidence.length === 1 ? "" : "s"}`;
    top.append(scope, evidence);
    const title = document.createElement("h4");
    title.textContent = item.title;
    const why = document.createElement("p");
    why.textContent = item.whyBig;
    const opening = document.createElement("p");
    opening.className = "ai-opening";
    opening.textContent = `AI opening: ${item.aiOpening}`;
    const links = document.createElement("div");
    links.className = "card-actions";
    for (const source of item.evidence.slice(0, 3)) {
      const link = document.createElement("a");
      link.href = source.archiveUrl;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = "Evidence trail";
      links.append(link);
      break;
    }
    card.append(top, title, why, opening, links);
    cityCards.append(card);
  }
}

renderCityList();
renderCity();

cityList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-city-id]");
  if (!button) return;
  activeCityId = button.dataset.cityId;
  renderCityList();
  renderCity();
});


for (const bucket of buckets.filter((bucket) => bucket !== "All")) {
  const button = document.createElement("button");
  button.className = "filter";
  button.type = "button";
  button.dataset.filter = bucket;
  button.textContent = bucket;
  filters.append(button);
}

function render() {
  const query = searchInput.value.trim().toLowerCase();
  const matches = data.publishedFinals.filter((item) => {
    const bucket = item.bucket ?? "Everyday";
    const inFilter = activeFilter === "All" || bucket === activeFilter;
    const inQuery = !query || `${item.title} ${item.whyBig} ${item.aiOpening}`.toLowerCase().includes(query);
    return inFilter && inQuery;
  });

  cards.replaceChildren();
  emptyState.hidden = matches.length > 0;

  for (const item of matches) {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card-top">
        <span class="pill">${item.bucket ?? "Everyday"}</span>
        <span class="source">${item.evidence.length} source${item.evidence.length === 1 ? "" : "s"}</span>
      </div>
      <h3></h3>
      <p class="final-summary"></p>
      <div class="card-actions">
        <a href="${item.evidence[0] ?? "https://github.com/pauljump/soannoying/tree/main/data/candidates"}" target="_blank" rel="noreferrer">Evidence trail</a>
      </div>
    `;
    card.querySelector("h3").textContent = item.title;
    card.querySelector(".final-summary").textContent = item.whyBig;
    cards.append(card);
  }
}

filters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  for (const filter of filters.querySelectorAll(".filter")) {
    filter.classList.toggle("active", filter.dataset.filter === activeFilter);
  }
  render();
});

searchInput.addEventListener("input", render);
render();
