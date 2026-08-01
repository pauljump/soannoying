const data = window.SO_ANNOYING_DATA;
const cards = document.querySelector("#cards");
const filters = document.querySelector(".filters");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const totalObservations = document.querySelector("#totalObservations");
const candidateCards = document.querySelector("#candidateCards");

const buckets = ["All", ...new Set(data.highlights.map((item) => item.bucket))].sort((a, b) => {
  if (a === "All") return -1;
  if (b === "All") return 1;
  return a.localeCompare(b);
});

let activeFilter = "All";

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
  source.href = `https://github.com/pauljump/soannoying/blob/main/data/candidates/2026-08-01-big-annoyance-screen.jsonl#${candidate.id}`;
  source.textContent = "Candidate record";
  links.append(source);
  card.append(title, why, links);
  candidateCards.append(card);
}

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
