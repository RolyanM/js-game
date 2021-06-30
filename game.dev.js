"use strict";

var playerOne = "X";
var playerTwo = "O";
var currnetPlayer = "It's player One's go (X)"; //Boxes Dom
//Top

var topOne = document.querySelector(".t1").value;
var topTwo = document.querySelector(".t2").value;
var topThree = document.querySelector(".t3").value; //Mid

var midOne = document.querySelector(".m1").value;
var midTwo = document.querySelector(".m2").value;
var midThree = document.querySelector(".m3").value; //Bottom

var btmOne = document.querySelector(".b1").value;
var btmTwo = document.querySelector(".b2").value;
var btmThree = document.querySelector(".b3").value;
document.addEventListener('DOMContentLoaded', function () {
  var squares = document.querySelectorAll('.container div');
  var playerDisplay = document.querySelector(".player");
  var currentPlayer = "";
  var playerOne = "Player One - Plant your flag!";
  var playerTwo = "Player Two - Plant your flag";
  squares.forEach(function (squares) {
    squares.addEventListener("click", clickOutcome);
  });

  function clickOutcome(e) {
    var squareArray = Array.from(squares);
    var index = squareArray.indexOf(e.target);
    console.log(index);
    playerDisplay.innerHTML = currentPlayer;

    if (currnetPlayer === playerOne) {
      squares[index].classList.add(".playerOne");
      currentPlayer = playerTwo;
      playerDisplay.innerHTML = currentPlayer;
    } else {
      squares[index].classList.add(".playerTwo");
      currentPlayer = playerOne;
      playerDisplay.innerHTML = currentPlayer;
    }
  }
});