// Declare deck variables
let playerDeck = []
let playDeck1 = []
let computerDeck = []
let playDeck2 = []
let cardToRemove1
let cardToRemove2
let winner
/*-------------------------------- Constants ---------------------------*/
let fullDeck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]





/*------------------------ Cached Element References --------------------*/

const messageEl = document.querySelector('#message')
const resetBtnEl = document.querySelector('#resetBtn')
let playerDeckEl = document.getElementById('playerDeck')
let playDeck1El = document.getElementById('playDeck1')
let computerDeckEl = document.getElementById('computerDeck')
let playDeck2El = document.getElementById('playDeck2')


/*----------------------------- Event Listeners -------------------------*/

document.querySelector('#flipBtn').addEventListener('click', handleClick)
resetBtnEl.addEventListener('click', init)

// onclick=() => drawCard('human')

/*-------------------------------- Functions ----------------------------*/

init()



function init() {
  shuffledDeck = fullDeck.sort(() => Math.random() - 0.5)
  
  playDeck1 = shuffledDeck.slice(0,26)
  playDeck2 = shuffledDeck.slice(26)
  winner = null
  turn = 1

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
  // }



  if (winner === null) {
    messageEl.textContent = `Flip a card!`
  } else if (winner === 'T') {
    messageEl.textContent = `It's war!!`
    return doubleWar()
  } else {
    return getWinner()
  }
}

function getWinner () {
//   if (fullDeck.length is in players pile) {
//     messageEl.textContent = `You have won the war!!!`
//   } else {
//     messageEl.textContent = `You have lost the war!`
//   }
}

function doubleWar() {

}

function handleClick() {
  if (fullDeck.length > 0) {
    
    // Assign card with the random index to a variable
    let cardPicked1 = fullDeck.splice(deck2, 1)[0]
    let cardPicked2 = fullDeck.splice(deck4, 1)[0]
    // Add card picked to deck 2
    playerDeck.push(cardPicked1)
    computerDeck.push(cardPicked2)
    // Pass card picked to render function to display
    renderDeck1(cardPicked1)
    renderDeck2(cardPicked2)
  }
}

function renderDeck1(cardPicked1) {
  if (playDeck1.length === 1) {
    playDeck1El.classList.remove('outline')
  }
  if (playDeck1.length > 1) {
    playDeck1El.classList.remove(cardToRemove1)
  }

  cardToRemove1 = cardPicked1
  playDeck1El.classList.add(cardPicked1)
  
  if (playDeck1.length === 26) {
    playDeck1El.classList.add('shadow')
    playerDeckEl.classList.remove('shadow')
  
  }
  if (playerDeck.length === 0) {
    playerDeckEl.classList.add('outline')
    playerDeckEl.classList.remove('back-blue')
    computerDeckEl.classList.add('outline')
    computerDeckEl.classList.remove('back-blue')
  }

}



function renderDeck2(cardPicked2) {
  if (deck4.length === 1) {
    deck4El.classList.remove('outline')
  }
  if (deck4.length) {
    deck4El.classList.remove(cardToRemove2)

  }
  cardToRemove2 = cardPicked2

  deck4El.classList.add(cardPicked2)


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
