"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// -- HTML elements --
var board = document.getElementById('board');
var cells = document.querySelectorAll('[data-cell]');
var currentStatus = document.getElementById('currentStatus');
var resetButton = document.getElementById('resetButton');
var gameEndOverlay = document.getElementById('gameEndOverlay');
var currentTeamFlag = document.getElementById('currentTeam');
var winningMessage = document.querySelector('[data-winning-message]');
var winningMessageText = document.querySelector('[data-winning-message] p');
var winningMessageImg = document.createElement('img'); // -- Game Variables --

var gameIsLive = true;
var englandTurn = true;
var winner = null;
var winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]; // -- Functions --

var setBoardHoverClass = function setBoardHoverClass() {
  board.classList.remove('england');
  board.classList.remove('argentina');

  if (englandTurn) {
    board.classList.add('.england');
  } else {
    board.classList.add('argentina');
  }
};

var placeFlagFunction = function placeFlagFunction(cell, currentTeamFlag) {
  cell.classList.add(currentTeamFlag);
};

var swapTurns = function swapTurns() {
  englandTurn = !englandTurn;
};

var updateCurrentStatus = function updateCurrentStatus() {
  if (englandTurn) {
    currentTeamFlag.src = './images/flag-england-flagge-quadratisch-85x85.gif';
    currentTeamFlag.alt = 'england';
  } else {
    currentTeamFlag.src = 'https://flagcdn.com/w80/ar.png';
    currentTeamFlag.alt = 'argentina';
  }
};

var checkWin = function checkWin(currentTeamFlag) {
  return winningCombinations.some(function (combination) {
    return combination.every(function (i) {
      return cells[i].classList.contains(currentTeamFlag);
    });
  });
};

var isDraw = function isDraw() {
  return _toConsumableArray(cells).every(function (cell) {
    return cell.classList.contains('england') || cell.classList.contains('argentina');
  });
};

var startGame = function startGame() {
  cells.forEach(function (cell) {
    winningMessageImg.remove();
    cell.classList.remove('england');
    cell.classList.remove('argentina');
    cell.removeEventListener('click', handleCellClick);
    cell.addEventListener('click', handleCellClick, {
      once: true
    });
  });
  setBoardHoverClass();
  gameEndOverlay.classList.remove('show');
};

var endGame = function endGame(draw) {
  if (draw) {
    winningMessageText.innerText = "draw!";
  } else {
    winningMessageImg.src = englandTurn ? './images/flag-england-flagge-quadratisch-85x85.gif' : './images/flag-argentina-flagge-quadratischschwarz-83x83.gif';
    winningMessageImg.alt = englandTurn ? 'england' : 'argentina';
    winningMessage.insertBefore(winningMessageImg, winningMessageText);
    winningMessageText.innerText = "wins!!!";
  }

  gameEndOverlay.classList.add('show');
}; // -- Event Handler --


var handleCellClick = function handleCellClick(e) {
  var cell = e.target;
  var currentTeam = englandTurn ? 'england' : 'argentina';
  placeFlagFunction(cell, currentTeam);

  if (checkWin(currentTeam)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
    updateCurrentStatus();
    setBoardHoverClass();
  }
}; // -- Event Listener --


resetButton.addEventListener('click', startGame); // -- Start Game --

startGame();