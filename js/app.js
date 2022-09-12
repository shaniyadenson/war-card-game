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

// document.querySelector('#flipBtn').addEventListener('click', handleClick)
resetBtnEl.addEventListener('click', init)

onclick=() => drawCard('human')

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
    let cardPicked1 = fullDeck.splice(deck2, 1)[0]
    let cardPicked2 = fullDeck.splice(deck4, 1)[0]
    // Add card picked to deck 2
    deck1.push(cardPicked1)
    deck3.push(cardPicked2)
    // Pass card picked to render function to display
    
    
    
    
    
  }
}

// Function to render deck state
// function render(cardPicked1) {
//   if (deck2.length === 1) {
//     deck2El.classList.remove('outline')
//   }
//   if (deck2.length > 1) {
//     deck2El.classList.remove(cardToRemove1)

//   }

//   cardToRemove1 = cardPicked1
//   deck2El.classList.add(cardPicked1)
  
//   if (deck2.length === 26) {
//     deck2El.classList.add('shadow')
//     deck1El.classList.remove('shadow')
  
//   }
//   // if (deck1.length === 0) {
//   //   deck1El.classList.add('outline')
//   //   deck1El.classList.remove('back-blue')
//   //   deck3El.classList.add('outline')
//   //   deck3El.classList.remove('back-blue')
//   // }

// }



// function render(cardPicked2) {
//   if (deck4.length === 1) {
//     deck4El.classList.remove('outline')
//   }
//   if (deck4.length) {
//     deck4El.classList.remove(cardToRemove2)

//   }
//   cardToRemove2 = cardPicked2

//   deck4El.classList.add(cardPicked2)


//   if (deck4.length === 26) {

//     deck4El.classList.add('shadow')
//     deck3El.classList.remove('shadow')
//   }
//   // // Remove card back color and add outline when last card is picked
// // if (deck1.length === 0) {
// //   deck1El.classList.add('outline')
// //   deck1El.classList.remove('back-blue')
// //   deck3El.classList.add('outline')
// //   deck3El.classList.remove('back-blue')
// // }

// }

function drawCard(deck) {
  switch (deck) {
      case 'human':
          // code to run on a human click
          if (deck2.length === 1) {
            deck2El.classList.remove('outline')
          }
          if (deck2.length > 1) {
            deck2El.classList.remove(cardToRemove1)
        
          }
        
          cardToRemove1 = deck
          deck2El.classList.add(deck)
          
          if (deck2.length === 26) {
            deck2El.classList.add('shadow')
            deck1El.classList.remove('shadow')
          
          }
          drawCard('computer');
          break;
      case 'computer':
          // code to run on a computer click
          if (deck4.length === 1) {
            deck4El.classList.remove('outline')
          }
          if (deck4.length) {
            deck4El.classList.remove(cardToRemove2)
        
          }
          cardToRemove2 = deck
        
          deck4El.classList.add(deck)
        
        
          if (deck4.length === 26) {
        
            deck4El.classList.add('shadow')
            deck3El.classList.remove('shadow')
          }
          break;
      default:
          console.warn(`check function drawCard(), got value ${deck} which did not match acceptable values 'human' or 'computer'`);
  }
}

// function drawCard(deck) {
//   switch (deck) {
//       case 'human':
//           // code to run on a human click
//       case 'computer':
//           // code to run on a computer click
//           break;
//       default:
//           console.warn(`check function drawCard(), got value ${deck} which did not match acceptable values 'human' or 'computer'`);
//   }
// }


