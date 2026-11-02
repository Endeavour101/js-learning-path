const footballTeam = {
  team: "Italy",
  year: 1982,
  headCoach: "Enzo Bearzot",
  players: [
    { name: "Dino Zoff", position: "goalkeeper", isCaptain: true },
    { name: "Claudio Gentile", position: "midfielder", isCaptain: false },
    { name: "Bruno Conti", position: "defender", isCaptain: false },
    { name: "Alessandro Altobelli", position: "defender", isCaptain: false },
    { name: "Paolo Rossi", position: "forward", isCaptain: false },
  ],
};

const headCoachEl = document.getElementById("head-coach");
const teamEl = document.getElementById("team");
const yearEl = document.getElementById("year");

headCoachEl.innerText = footballTeam.headCoach;
teamEl.innerText = footballTeam.team;
yearEl.innerText = footballTeam.year;

const playerCards = document.getElementById("player-cards");

function renderPlayers(selectedPosition = "all") {
  const filteredPlayers = footballTeam.players.filter(({ position }) => {
    return selectedPosition === "all" || position === selectedPosition;
  });

  return filteredPlayers
    .map(({ name, position, isCaptain }) => {
      return `<div class="player-card">
      <h2>${isCaptain ? "(Captain) " : ""}${name}</h2>
      <p>Position: ${position}</p> 
    </div>`;
    })
    .join("");
}

playerCards.innerHTML = renderPlayers();

const chosedPositionEl = document.getElementById("players");
chosedPositionEl.addEventListener("change", () => {
  playerCards.innerHTML = renderPlayers(chosedPositionEl.value);
});

console.log(renderPlayers("all"));

/* console.log(playersEl.value);
console.log(footballTeam.players[0].name); */
