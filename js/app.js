// Declare deck variables
let deck1 = []
let deck2 = []
let deck3 = []
let deck4 = []
let cardToRemove1
let cardToRemove2
let winner
/*-------------------------------- Constants ---------------------------*/
let fullDeck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]





/*------------------------ Cached Element References --------------------*/

const messageEl = document.querySelector('#message')
const resetBtnEl = document.querySelector('#resetBtn')
let deck1El = document.getElementById('deck-1')
let deck2El = document.getElementById('deck-2')
let deck3El = document.getElementById('deck-3')
let deck4El = document.getElementById('deck-4')


/*----------------------------- Event Listeners -------------------------*/

resetBtnEl.addEventListener('click', init)

document.querySelector('#flipBtn').addEventListener('click', handleClick)


/*-------------------------------- Functions ----------------------------*/

init()



function init() {
  shuffledDeck = fullDeck.sort(() => Math.random() - 0.5)
  
  deck2 = shuffledDeck.slice(0,26)
  deck4 = shuffledDeck.slice(26)
  winner = null

  render()
}
// console.log(deck2)
// console.log(deck4)


function render() {
  // if (players card is > computer) {
  //   move the two cards to players pile
  // } else if (computer > players card) {
  //   move the two cards to computers pile
  // } else {
  //   return war()
  }



//   if (!winner) {
//     messageEl.textContent = `Flip a card!`
//   } else if (winner === 'T') {
//     messageEl.textContent = `It's war!!`
//   } else {
//     return getWinner()
//   }
// }

// function getWinner () {
//   if (fullDeck.length is in players pile) {
//     messageEl.textContent = `You have won the war!!!`
//   } else {
//     messageEl.textContent = `You have lost the war!`
//   }
// }

function war() {

}

function handleClick() {
  if (fullDeck.length > 0) {
    
    // Assign card with the random index to a variable
    let cardPicked1 = fullDeck.splice(shuffledDeck, 1)[0]
    let cardPicked2 = fullDeck.splice(shuffledDeck, 1)[0]
    // Add card picked to deck 2
    deck1.push(cardPicked1)
    deck3.push(cardPicked2)
    // Pass card picked to render function to display
    render()
    
    
  }
}

// Function to render deck state
function playerDeck(cardPicked1) {

  // Remove outline class when first card is picked
  if (deck2.length === 1) {
    deck2El.classList.remove('outline')
  }
  // // Removes previous picked card from deck 2 class list
  if (deck2.length > 1) {
    deck2El.classList.remove(cardToRemove1)

  }

  cardToRemove1 = cardPicked1
  // // Add current card picked to deck 2 element
  deck2El.classList.add(cardPicked1)
  

  // // Adjust shadow when deck gets above/below halfway full
  if (deck2.length === 26 && deck4.length === 26) {
    deck2El.classList.add('shadow')
    deck1El.classList.remove('shadow')
  
  }
  // // Remove card back color and add outline when last card is picked
  // if (deck1.length === 0) {
  //   deck1El.classList.add('outline')
  //   deck1El.classList.remove('back-blue')
  //   deck3El.classList.add('outline')
  //   deck3El.classList.remove('back-blue')
  // }

}

function computerDeck(cardPicked2) {
if (deck4.length === 1) {
  deck4El.classList.remove('outline')
}
// // Removes previous picked card from deck 2 class list
if (deck4.length) {
  deck4El.classList.remove(cardToRemove2)

}
cardToRemove2 = cardPicked2
// // Add current card picked to deck 2 element

deck4El.classList.add(cardPicked2)


// // Adjust shadow when deck gets above/below halfway full
if (deck4.length === 26) {

  deck4El.classList.add('shadow')
  deck3El.classList.remove('shadow')
}
// // Remove card back color and add outline when last card is picked
// if (deck1.length === 0) {
//   deck1El.classList.add('outline')
//   deck1El.classList.remove('back-blue')
//   deck3El.classList.add('outline')
//   deck3El.classList.remove('back-blue')
// }

}








// Cached element references


// const messageEl = document.querySelector('#message')

// let deck1El = document.getElementById('deck-1')
// let deck2El = document.getElementById('deck-2')
// let deck3El = document.getElementById('deck-3')
// let deck4El = document.getElementById('deck-4')


// Event listeners
// document.getElementById('flipBtn').addEventListener('click', handleClick)

// Functions


// Initialize deck 1 with array of 52 cards 


// init()

// function init() {
  
//   shuffled = Math.floor(Math.random() * fullDeck.length)
//   deck2 = shuffled.slice(0, 26)
//   deck4 = shuffled.slice(26)
//   }
// console.log(deck2)

// Function to handle a button click:
// function handleClick() {
//   if (fullDeck.length > 0) {
//     // Randomly select number from total cards remaining
//     let randIdx = Math.floor(Math.random() * fullDeck.length)
//     // Assign card with the random index to a variable
//     let cardPicked = fullDeck.splice(randIdx, 1)[0]
//     // Add card picked to deck 2
//     deck2.push(cardPicked)
//     // Pass card picked to render function to display
//     render(cardPicked)
//   }
// }
// 