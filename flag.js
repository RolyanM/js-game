// -- HTML elements --
const board = document.getElementById( 'board' );
const cells = document.querySelectorAll( '[data-cell]' );
const currentStatus = document.getElementById( 'currentStatus' );
const resetButton = document.getElementById( 'resetButton' );
const gameEndOverlay = document.getElementById( 'gameEndOverlay' );
const currentTeamFlag = document.getElementById( 'currentTeam' );
const winningMessage = document.querySelector( '[data-winning-message]' );
const winningMessageText = document.querySelector( '[data-winning-message] p' );
const winningMessageImg = document.createElement( 'img' );

// -- Game Variables --
let gameIsLive = true;
let englandTurn = true;
let winner = null;
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// -- Functions --
const setBoardHoverClass = () => {
  board.classList.remove( 'england' );
  board.classList.remove( 'argentina' );

  if ( englandTurn ) {
    board.classList.add( '.england' );
  } else {
    board.classList.add( 'argentina' );
  }
}

const placeFlagFunction = ( cell, currentTeamFlag ) => {
  cell.classList.add( currentTeamFlag );
}

const swapTurns = () => {
  englandTurn = !englandTurn;
}

const updateCurrentStatus = () => {
  if ( englandTurn ) {
    currentTeamFlag.src = './images/flag-england-flagge-quadratisch-85x85.gif';
    currentTeamFlag.alt = 'england';
  } else {
    currentTeamFlag.src = 'https://flagcdn.com/w80/ar.png';
    currentTeamFlag.alt = 'argentina';
  }
}

const checkWin = ( currentTeamFlag ) => {
  return winningCombinations.some( combination => {
    return combination.every( i => {
      return cells[i].classList.contains( currentTeamFlag );
    })
  });
}

const isDraw = () => {
  return [...cells].every( cell => {
    return cell.classList.contains( 'england' ) || cell.classList.contains( 'argentina' );
  })
}

const startGame = () => {
  cells.forEach( cell => {
    winningMessageImg.remove();
    cell.classList.remove( 'england' );
    cell.classList.remove( 'argentina' );
    cell.removeEventListener( 'click', handleCellClick );
    cell.addEventListener( 'click', handleCellClick, { once: true });
  });

  setBoardHoverClass();
  gameEndOverlay.classList.remove( 'show' );
}

const endGame = ( draw ) => {
  if ( draw ) {
    winningMessageText.innerText = `draw!`;
  } else {
    winningMessageImg.src = englandTurn ? './images/flag-england-flagge-quadratisch-85x85.gif' : './images/flag-argentina-flagge-quadratischschwarz-83x83.gif';
    winningMessageImg.alt = englandTurn ? 'england' : 'argentina';
    winningMessage.insertBefore( winningMessageImg, winningMessageText );
    winningMessageText.innerText = `wins!!!`
  }

  gameEndOverlay.classList.add( 'show' );
}

// -- Event Handler --
const handleCellClick = ( e ) => {
  const cell = e.target;
  const currentTeam = englandTurn ? 'england' : 'argentina';

  placeFlagFunction( cell, currentTeam );
  if ( checkWin( currentTeam )) {
    endGame( false );
  } else if ( isDraw()) {
    endGame( true );
  } else {
    swapTurns();
    updateCurrentStatus();
    setBoardHoverClass();
  }
}

// -- Event Listener --
resetButton.addEventListener( 'click', startGame );

// -- Start Game --
startGame();
