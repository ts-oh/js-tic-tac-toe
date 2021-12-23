// 1. Create a IFFE module to create a gameboard object
const createGameBoard = (function () {
  const boardArray = function () {
    return {
      grid: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    }
  }
  const printBoard = function () {
    return boardArray()
  }
  return { printBoard }
})()

let gameboard = createGameBoard.printBoard()

// 2. Create a factory function that creates two player objects
const playerFactory = function (name, mark) {
  const setName = name
  const setMark = mark
  const getName = function () {
    return setName
  }
  const getMark = function () {
    return setMark
  }
  return { getName, getMark }
}

const player1 = playerFactory('Player 1', 'X')
const player2 = playerFactory('Player 2', 'O')

// 3. Function to start game logic
// function takes three parameters player1, player2 and gameboard.
function playGame(player1, player2, gameboard) {
  // player turn
  let playerTurns

  // if player turn is player1
  if (playerTurn === player1) {
    // put player1 mark down on the gameboard
    // check winning condition (combo)
    // if win is detected announce winner
    // otherwise winning condition is false
    // switch to player2
  } else if (playerTurn === player2) {
    // put player2 mark down on the gameboard
    // check winning condition (combo)
    // if win is detected announce winner
    // otherwise winning condition is false
    // switch to player 1
  }
}
