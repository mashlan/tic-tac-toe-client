'use strict'
const winLogic = require('./winLogic')
const linearBoard = new Array(9).fill(undefined)
let winner
let gameDone = false

const onSelection = function () {
  // the boxId value double as an index to the linear
  // tic tac toe grid when the word 'box' is removed

  const boxId = $(this).attr('id')
  const index = boxId.replace('box', '')

  // filledSpace is used to keep track of whose turn it is.
  // X's will have an even filledSpace.length. O's will have odd.
  const filledSpace = linearBoard.filter((e, i, a) => e !== undefined)

  // linearBoard has been initialized to 9 undefined elements. The value of
  // undefined here means that the space is available to be played.
  // The first test checks to see if all spaces are filled. If so, then
  // the game is done. If not, then if an unfilled space is clicked on
  // then the linearBoard is populated.

  if (gameDone) {
    console.log('Game is done. filledSpace.length is: ', filledSpace.length)
  } else if (linearBoard[index] === undefined) {
    linearBoard[index] = filledSpace.length % 2 > 0 ? 'o' : 'x'
    $(this).text(linearBoard[index])
    winner = winLogic.getWinner(winLogic.getLanes(linearBoard, winLogic.winLanes))
    console.log('Before winner check. linearBoard contents: ', linearBoard)
    if (winner) {
      console.log(linearBoard[index], ' WINS!')
      gameDone = true
      $('.banner').text(linearBoard[index] + ' WINS!')
    } else if (!linearBoard.some(e => (e === undefined))) {
      console.log('some result: ', linearBoard.some((e, i, a) => e === ''))
      console.log('linearBoard : ', linearBoard)
      console.log('Game is done. indexOf undefined is: ', linearBoard.indexOf(''))
      $('.banner').text('Game is tied!')
      gameDone = true
    }
  }
}

const addHandlers = () => {
  $('.box').on('click', onSelection)
  // $('#sign-in').on('submit', onSignIn)
  // $('#sign-out').on('submit', onSignOut)
  // $('#change-password').on('submit', onChangePassword)
}
module.exports = {
  addHandlers
}
