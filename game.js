let playerOne = "X";
let playerTwo = "O";
let currnetPlayer = "It's player One's go (X)"

//Boxes Dom
//Top
let topOne = document.querySelector(".t1").value;
let topTwo = document.querySelector(".t2").value;
let topThree = document.querySelector(".t3").value;
//Mid
let midOne = document.querySelector(".m1").value;
let midTwo = document.querySelector(".m2").value;
let midThree = document.querySelector(".m3").value;
//Bottom
let btmOne = document.querySelector(".b1").value;
let btmTwo = document.querySelector(".b2").value;
let btmThree = document.querySelector(".b3").value;


document.addEventListener('DOMContentLoaded', () => {

const squares = document.querySelectorAll('.container div')
const playerDisplay = document.querySelector(".player")
let currentPlayer = "";
let playerOne = "Player One - Plant your flag!";
let playerTwo = "Player Two - Plant your flag";


squares.forEach(squares => {
  squares.addEventListener("click", clickOutcome)
})

function clickOutcome(e) {
  const squareArray = Array.from(squares)
  const index = squareArray.indexOf(e.target)
  console.log(index);
  playerDisplay.innerHTML = currentPlayer


  if(currnetPlayer === playerOne ) {
    squares[index].classList.add(playerOne)
    currentPlayer = playerTwo;
    playerDisplay.innerHTML = currentPlayer
  } else {
    squares[index].classList.add(".playerTwo")
    currentPlayer = playerOne;
    playerDisplay.innerHTML = currentPlayer
  }
}

})