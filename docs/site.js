const data = window.SO_ANNOYING_DATA;
const cards = document.querySelector("#cards");
const filters = document.querySelector(".filters");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const totalObservations = document.querySelector("#totalObservations");
const candidateCards = document.querySelector("#candidateCards");
const cityList = document.querySelector("#cityList");
const cityPanelTop = document.querySelector("#cityPanelTop");
const cityCards = document.querySelector("#cityCards");
const cityFilters = document.querySelector("#cityFilters");

const buckets = ["All", ...new Set(data.highlights.map((item) => item.bucket))].sort((a, b) => {
  if (a === "All") return -1;
  if (b === "All") return 1;
  return a.localeCompare(b);
});

let activeFilter = "All";
let activeCityId = data.cities[0]?.id;
let activeCityScope = "all";

totalObservations.textContent = data.totalObservations.toLocaleString();

for (const candidate of data.candidates) {
  const card = document.createElement("article");
  card.className = "candidate";
  const title = document.createElement("h3");
  title.textContent = candidate.title;
  const why = document.createElement("p");
  why.textContent = candidate.why_big;
  const links = document.createElement("div");
  links.className = "candidate-links";
  const source = document.createElement("a");
  source.href = `https://github.com/pauljump/soannoying/blob/main/data/candidates/2026-08-09-codex-finalists.jsonl#${candidate.id}`;
  source.textContent = "Candidate record";
  links.append(source);
  card.append(title, why, links);
  candidateCards.append(card);
}

function renderCityList() {
  cityList.replaceChildren();
  for (const city of data.cities) {
    const button = document.createElement("button");
    button.className = `city-tab${city.id === activeCityId ? " active" : ""}`;
    button.type = "button";
    button.dataset.cityId = city.id;
    button.innerHTML = `<strong></strong><span>${city.finalistCount} finalist drafts</span>`;
    button.querySelector("strong").textContent = city.name;
    cityList.append(button);
  }
}

function renderCity() {
  const city = data.cities.find((item) => item.id === activeCityId);
  if (!city) return;
  cityPanelTop.innerHTML = `<div><p class="kicker">${city.status} benchmark</p><h3></h3><p>${city.sourcePages} frozen source pages · ${city.candidateCount} backlog candidates</p></div>`;
  cityPanelTop.querySelector("h3").textContent = city.name;
  const matches = city.finalists.filter((item) => activeCityScope === "all" || item.cityScope === activeCityScope);
  cityCards.replaceChildren();
  for (const item of matches) {
    const card = document.createElement("article");
    card.className = "city-card";
    const top = document.createElement("div");
    top.className = "card-top";
    const scope = document.createElement("span");
    scope.className = "pill";
    scope.textContent = item.cityScope === "city_unique" ? "City-specific" : "Shared elsewhere";
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
      link.textContent = source.sourceId;
      links.append(link);
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

cityFilters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-city-scope]");
  if (!button) return;
  activeCityScope = button.dataset.cityScope;
  for (const filter of cityFilters.querySelectorAll("button")) filter.classList.toggle("active", filter.dataset.cityScope === activeCityScope);
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

function issueUrl(template, item) {
  const params = new URLSearchParams({
    template,
    title: `${template === "problem-review.yml" ? "Review" : "Proposal"}: ${item.title.slice(0, 80)}`,
  });
  return `https://github.com/pauljump/soannoying/issues/new?${params.toString()}`;
}

function render() {
  const query = searchInput.value.trim().toLowerCase();
  const matches = data.highlights.filter((item) => {
    const inFilter = activeFilter === "All" || item.bucket === activeFilter;
    const inQuery = !query || `${item.title} ${item.source} ${item.bucket}`.toLowerCase().includes(query);
    return inFilter && inQuery;
  });

  cards.replaceChildren();
  emptyState.hidden = matches.length > 0;

  for (const item of matches) {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card-top">
        <span class="pill">${item.bucket}</span>
        <span class="source">${item.source}</span>
      </div>
      <h3></h3>
      <div class="card-actions">
        <a href="${item.sourceUrl}">Source</a>
        <a href="${issueUrl("problem-review.yml", item)}">Review</a>
        <a href="${issueUrl("solution-proposal.yml", item)}">Propose</a>
      </div>
    `;
    card.querySelector("h3").textContent = item.title;
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
