//Declaring global variables
let pastCard
let presentCard
let futureCard
const btnClick = document.querySelector("#readingBtn");

//Creating the cards, each one has a name and a meaning
let cards = [
    {
        name: "The Fool",
        meaning: ""
    },
    {
        name: "The Magician",
        meaning:""
    },
    {
        name: "The High Priestess",
        meaning:""
    },
    {
        name: "The Empress",
        meaning:""
    },
    {
        name: "The Emperor",
        meaning:""
    },
    {
        name: "The Hierophant",
        meaning:""
    },
    {
        name: "The Lovers",
        meaning:""
    },
    {
        name: "The Chariot",
        meaning:""
    },
    {
        name: "Strength",
        meaning: ""
    },
    {
        name: "The Hermit",
        meaning:""
    },
    {
        name: "Wheel of Fortune",
        meaning: ""
    },
    {
        name: "Justice",
        meaning: ""
    },
    {
        name: "The Hanged Man",
        meaning: ""
    },
    {
        name: "Death",
        meaning: ""
    },
    {
        name: "Temperance",
        meaning: ""
    },
    {
        name: "The Devil",
        meaning: ""
    },
    {
        name: "The Tower",
        meaning: ""
    },
    {
        name: "The Star",
        meaning: ""
    },
    {
        name: "The Moon",
        meaning: ""
    },
    {
        name: "The Sun",
        meaning: ""
    },
    {
        name: "Judgement",
        meaning: ""
    },
    {
        name: "The World",
        meaning:""
    }

]


//Choosing a random card from the deck
const drawCard = () =>  {
    let drawn = Math.floor(Math.random() * cards.length);
    return cards[drawn];
}


//Checking that cards are not duplicates


//Listening for the button click
btnClick.addEventListener('click', () => {
    console.log(drawCard());
})
//Displaying the cards and predictions



