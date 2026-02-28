// Chase Atlantic Song Sorter

// --- CONFIG ---
const MAX_COMPARISONS = 300;
let comparisons = 0;
let currentPair = [];


// --- SONG DATA ---
const songs = [
  { name: "Swim", image: "images/self_titled.jpg", rating: 1200 },
  { name: "Friends", image: "images/nostalgia.jpg", rating: 1200 },
  { name: "Into It", image: "images/self_titled.jpg", rating: 1200 },
  { name: "Heaven and Back", image: "images/phases.jpg", rating: 1200 },
  { name: "Okay", image: "images/self_titled.jpg", rating: 1200 },
  { name: "Drugs & Money", image: "images/self_titled.jpg", rating: 1200 },
  { name: "Right Here", image: "images/part_one.jpg", rating: 1200 },
  { name: "23", image: "images/self_titled.jpg", rating: 1200 },
  { name: "Aleyuh", image: "images/beauty_in_death.jpg", rating: 1200 },
  { name: "Amy", image: "images/lost_in_heaven.jpg", rating: 1200 },
  { name: "Anchor Tattoo", image: "images/dalliance.jpg", rating: 1200 },
  { name: "Angeline", image: "images/self_titled.jpg", rating: 1200 },
  { name: "Angels", image: "images/phases.jpg", rating: 1200 },
  { name: "Beauty in death", image: "images/beauty_in_death.jpg", rating: 1200 },
  { name: "Call me back", image: "images/beauty_in_death.jpg", rating: 1200 },
  { name: "Cassie", image: "images/self_titled.jpg", rating: 1200 },
  { name: "Church", image: "images/part_one.jpg", rating: 1200 },
  { name: "Chxse", image: "images/beauty_in_death_deluxe.jpg", rating: 1200 },
  { name: "Cold Nights", image: "images/beauty_in_death_deluxe.jpg", rating: 1200 },
  { name: "Consume", image: "images/self_titled.jpg", rating: 1200 },
  { name: "Dancer in the dark", image: "images/self_titled.jpg", rating: 1200 },
  { name: "Demon time", image: "images/lost_in_heaven.jpg", rating: 1200 },
  { name: "Devilish", image: "images/dont_try_this.jpg", rating: 1200 },
  { name: "Die for me", image: "images/lost_in_heaven.jpg", rating: 1200 },
  { name: "Disconnected", image: "images/lost_in_heaven.jpg", rating: 1200 },
  { name: "Don't laugh", image: "images/lost_in_heaven.jpg", rating: 1200 },
  { name: "Doubt it", image: "images/lost_in_heaven.jpg", rating: 1200 },
  { name: "Empty", image: "images/beauty_in_death.jpg", rating: 1200 },
  { name: "Escort", image: "images/beauty_in_death_deluxe.jpg", rating: 1200 },
  { name: "Even though I'm depressed", image: "images/phases.jpg", rating: 1200 },
  { name: "Facedown", image: "images/lost_in_heaven_deluxe.jpg", rating: 1200 },
  { name: "Falling", image: "images/paradise.jpg", rating: 1200 },
  { name: "Favela", image: "images/lost_in_heaven.jpg", rating: 1200 },
  { name: "Gravity", image: "images/dalliance.jpg", rating: 1200 },
  { name: "Gravity (so much higher remix)", image: "images/dalliance.jpg", rating: 1200 },
  { name: "Greengreengreen", image: "images/dont_try_this.jpg", rating: 1200 },
  { name: "Her", image: "images/phases.jpg", rating: 1200 },
  { name: "Hold your breath", image: "images/dalliance.jpg", rating: 1200 },
  { name: "Hours lost", image: "images/lost_in_heaven.jpg", rating: 1200 },
  { name: "I don't like darkness", image: "images/phases.jpg", rating: 1200 },
  { name: "I never existed", image: "images/phases.jpg", rating: 1200 },
  { name: "I think I'm lost again", image: "images/beauty_in_death.jpg", rating: 1200 },
  { name: "Intro", image: "images/phases.jpg", rating: 1200 },
  { name: "Keep it up", image: "images/self_titled.jpg", rating: 1200 },
  { name: "Like a rockstar", image: "images/dont_try_this.jpg", rating: 1200 },
  { name: "Love is (not) easy", image: "images/phases.jpg", rating: 1200 },
  { name: "Lust", image: "images/dont_try_this.jpg", rating: 1200 },
  { name: "Mamacita", image: "images/lost_in_heaven.jpg", rating: 1200 },
  { name: "Meddle about", image: "images/nostalgia.jpg", rating: 1200 },
  { name: "Mess me up", image: "images/lost_in_heaven.jpg", rating: 1200 },
  { name: "Molly", image: "images/beauty_in_death.jpg", rating: 1200 },
  { name: "Moonlight", image: "images/paradise.jpg", rating: 1200 },
  { name: "Night calls", image: "images/lost_in_heaven.jpg", rating: 1200 },
  { name: "No friends", image: "images/part_three.jpg", rating: 1200 },
  { name: "No rainbows", image: "images/phases.jpg", rating: 1200 },
  { name: "Numb to the feeling", image: "images/numb_to_the_feeling.jpg", rating: 1200 },
  { name: "Obsessive", image: "images/paradise.jpg", rating: 1200 },
  { name: "Ohmami", image: "images/beauty_in_death_deluxe.jpg", rating: 1200 },
  { name: "Ohmami - With Maggie Lindemann", image: "images/beauty_in_death_deluxe.jpg", rating: 1200 },
  { name: "Out the roof", image: "images/beauty_in_death.jpg", rating: 1200 },
  { name: "Ozone", image: "images/self_titled.jpg", rating: 1200 },
  { name: "Paradise", image: "images/paradise.jpg", rating: 1200 },
  { name: "Paranoid", image: "images/beauty_in_death.jpg", rating: 1200 },
  { name: "Phases", image: "images/phases.jpg", rating: 1200 },
  { name: "Please stand by", image: "images/beauty_in_death.jpg", rating: 1200 },
  { name: "Pleasexanny", image: "images/beauty_in_death.jpg", rating: 1200 },
  { name: "Remind me", image: "images/lost_in_heaven_deluxe.jpg", rating: 1200 },
  { name: "Ricochet", image: "images/lost_in_heaven.jpg", rating: 1200 },
  { name: "Roxanne", image: "images/nostalgia.jpg", rating: 1200 },
  { name: "Runaway", image: "images/dalliance.jpg", rating: 1200 },
  { name: "Slide", image: "images/beauty_in_death.jpg", rating: 1200 },
  { name: "Slow down", image: "images/paradise.jpg", rating: 1200 },
  { name: "Stranger things", image: "images/beauty_in_death_deluxe.jpg", rating: 1200 },
  { name: "Stuckinmybrain", image: "images/phases.jpg", rating: 1200 },
  { name: "Talk slow", image: "images/nostalgia.jpg", rating: 1200 },
  { name: "The walls", image: "images/self_titled.jpg", rating: 1200 },
  { name: "Tidal wave", image: "images/tidal_wave.jpg", rating: 1200 },
  { name: "Too late", image: "images/phases.jpg", rating: 1200 },
  { name: "Triggered", image: "images/self_titled.jpg", rating: 1200 },
  { name: "Uncomfortable", image: "images/self_titled.jpg", rating: 1200 },
  { name: "Vibes", image: "images/nostalgia.jpg", rating: 1200 },
  { name: "Victory lap", image: "images/lost_in_heaven_deluxe.jpg", rating: 1200 },
  { name: "Warcry", image: "images/lost_in_heaven_deluxe.jpg", rating: 1200 },
  { name: "Wasted", image: "images/beauty_in_death.jpg", rating: 1200 },
  { name: "What u call that", image: "images/dont_try_this.jpg", rating: 1200 },
  { name: "Why stop now", image: "images/part_two.jpg", rating: 1200 },
  { name: "You", image: "images/lost_in_heaven.jpg", rating: 1200 },
  { name: "You too.", image: "images/dont_try_this.jpg", rating: 1200 },
];

// UTILITY FUNCTIONS

// Elo rating calculation
function expectedScore(rA, rB) {
  return 1 / (1 + Math.pow(10, (rB - rA) / 400));
}

function updateRatings(winner, loser) {
  const K = 32;
  const expectedWinner = expectedScore(winner.rating, loser.rating);
  const expectedLoser = expectedScore(loser.rating, winner.rating);

  winner.rating += K * (1 - expectedWinner);
  loser.rating += K * (0 - expectedLoser);
}

// Pick two random songs
function getRandomSongs() {
  let first = songs[Math.floor(Math.random() * songs.length)];
  let second;
  do {
    second = songs[Math.floor(Math.random() * songs.length)];
  } while (second === first);

  currentPair = [first, second];
  document.getElementById("img1").src = first.image;
  document.getElementById("img2").src = second.image;
  document.getElementById("song1").textContent = first.name;
  document.getElementById("song2").textContent = second.name;
}

// Update progress bar
function updateProgress() {
  const percent = Math.floor((comparisons / MAX_COMPARISONS) * 100);
  document.getElementById("progress-bar").style.width = percent + "%";
  document.getElementById("progress-text").textContent =
    comparisons + " / " + MAX_COMPARISONS + " comparisons";
}

// Handle a comparison
function registerComparison() {
  comparisons++;
  updateProgress();

  if (comparisons >= MAX_COMPARISONS) {
    endSorting();
    return;
  }

  getRandomSongs();
}

// BUTTON HANDLERS

// Start button
document.getElementById("start-btn").onclick = () => {
  document.querySelector(".home-page").style.display = "none";
  document.querySelector(".app").style.display = "block";
  getRandomSongs();
  updateProgress();
};

// Song choice buttons
document.getElementById("choice1").onclick = () => {
  updateRatings(currentPair[0], currentPair[1]);
  registerComparison();
};

document.getElementById("choice2").onclick = () => {
  updateRatings(currentPair[1], currentPair[0]);
  registerComparison();
};

// Skip button
document.getElementById("skip-btn").onclick = () => {
  registerComparison(); 
};

// END SORTING & RESULTS

function endSorting() {
  // disable buttons
  document.getElementById("choice1").onclick = null;
  document.getElementById("choice2").onclick = null;
  document.getElementById("skip-btn").onclick = null;

  // hide progress
  document.querySelector(".progress-container").style.display = "none";
  document.getElementById("progress-text").style.display = "none";

  showFinalRanking();
}

function showFinalRanking() {
  const sorted = [...songs].sort((a, b) => b.rating - a.rating);
  const container = document.querySelector(".app");
  container.innerHTML = "<h1>Your Results</h1>";

  // --- Top 10 Grid ---
  const topTitle = document.createElement("h2");
  topTitle.textContent = "Top 10";
  container.appendChild(topTitle);

  const topGrid = document.createElement("div");
  topGrid.className = "top-grid";

  sorted.slice(0, 10).forEach((song, i) => {
    const card = document.createElement("div");
    card.className = "top-card";
    card.innerHTML = `
      <span class="rank">#${i + 1}</span>
      <img src="${song.image}">
      <p>${song.name}</p>
    `;
    topGrid.appendChild(card);
  });
  container.appendChild(topGrid);

  // --- Full Ranking Grid ---
  const fullTitle = document.createElement("h2");
  fullTitle.textContent = "Full Ranking";
  container.appendChild(fullTitle);

  const rankingGrid = document.createElement("div");
  rankingGrid.className = "ranking-grid";

  sorted.forEach((song, i) => {
    const card = document.createElement("div");
    card.className = "result-card";
    card.innerHTML = `
      <span class="rank">#${i + 1}</span>
      <img src="${song.image}">
      <p>${song.name}</p>
    `;
    rankingGrid.appendChild(card);
  });
  container.appendChild(rankingGrid);

  // --- Action Buttons ---
  const actions = document.createElement("div");
  actions.className = "actions";
  actions.innerHTML = `
    <button onclick="shareResults()">Share my results</button>
    <button onclick="restartSorter()">Restart</button>
  `;
  container.appendChild(actions);
}

// SHARE / RESTART

function shareResults() {
  const sorted = [...songs].sort((a, b) => b.rating - a.rating);
  const top5 = sorted.slice(0, 5).map((s, i) => `${i + 1}. ${s.name}`).join("\n");
  const text = "My Chase Atlantic Top 5:\n\n" + top5;

  if (navigator.share) {
    navigator.share({ title: "My Song Ranking", text });
  } else {
    navigator.clipboard.writeText(text);
    alert("Results copied to clipboard!");
  }
}

function restartSorter() {
  songs.forEach(song => song.rating = 1200);
  comparisons = 0;
  location.reload();
}