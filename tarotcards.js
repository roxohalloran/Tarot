//Declaring global variables
let pastCard;
let presentCard;
let futureCard;
let drawnCards;
const btnClick = document.querySelector("#readingBtn");

//Display variables
const pastReading = [
  document.getElementById("pastReading"),
  document.getElementById("pastCard"),
];
const presentReading = [
  document.getElementById("presentReading"),
  document.getElementById("presentCard"),
];
const futureReading = [
  document.getElementById("futureReading"),
  document.getElementById("futureCard"),
];

//Creating the cards, each one has a name and a meaning
const cards = [
  {
    name: "The Fool",
    meaning: "",
    emoji: "😃",
  },
  {
    name: "The Magician",
    meaning: "",
    emoji: "🧙",
  },
  {
    name: "The High Priestess",
    meaning: "",
    emoji: "💅",
  },
  {
    name: "The Empress",
    meaning: "",
    emoji: "👸",
  },
  {
    name: "The Emperor",
    meaning: "",
    emoji: "🤴",
  },
  {
    name: "The Hierophant",
    meaning: "",
    emoji: "⛪️",
  },
  {
    name: "The Lovers",
    meaning: "",
    emoji: "💑",
  },
  {
    name: "The Chariot",
    meaning: "",
    emoji: "🚗",
  },
  {
    name: "Strength",
    meaning: "",
    emoji: "🦁",
  },
  {
    name: "The Hermit",
    meaning: "",
    emoji: "🐚",
  },
  {
    name: "Wheel of Fortune",
    meaning: "",
    emoji: "🔮",
  },
  {
    name: "Justice",
    meaning: "",
    emoji: "⚖️",
  },
  {
    name: "The Hanged Man",
    meaning: "",
    emoji: "🪢",
  },
  {
    name: "Death",
    meaning: "",
    emoji: "💀",
  },
  {
    name: "Temperance",
    meaning: "",
    emoji: "😐",
  },
  {
    name: "The Devil",
    meaning: "",
    emoji: "😈",
  },
  {
    name: "The Tower",
    meaning: "",
    emoji: "💥",
  },
  {
    name: "The Star",
    meaning: "",
    emoji: "⭐️",
  },
  {
    name: "The Moon",
    meaning: "",
    emoji: "🌝",
  },
  {
    name: "The Sun",
    meaning: "",
    emoji: "😎",
  },
  {
    name: "Judgement",
    meaning: "",
    emoji: "🧑‍⚖️",
  },
  {
    name: "The World",
    meaning: "",
    emoji: "🗺",
  },
];

//Choosing a random card from the deck
const drawCard = (num) => {
  drawn = getRandom(cards, num);
  return drawn;
};

//Checking that cards are not duplicates
function getRandom(arr, n) {
  let result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  while (n--) {
    let x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

//Separating the cards
function separateCards() {
  pastCard = drawnCards[0];
  presentCard = drawnCards[1];
  futureCard = drawnCards[2];
}

//Placing the prediction
function fillPrediction() {
  pastReading[0].innerHTML = pastCard.name;
  presentReading[0].innerHTML = presentCard.name;
  futureReading[0].innerHTML = futureCard.name;

  pastReading[1].innerHTML = pastCard.emoji;
  presentReading[1].innerHTML = presentCard.emoji;
  futureReading[1].innerHTML = futureCard.emoji;
}

//Listening for the button click
btnClick.addEventListener("click", () => {
  drawnCards = drawCard(3);
  separateCards();
  fillPrediction();
});

//Displaying the cards and predictions
//Place them onto the UI
