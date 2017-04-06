'use strict'

const linearBoard = new Array(9)

const onSelection = function () {
  // the boxId value double as an index to the linear
  // tic tac toe grid when the word 'box' is removed

  const boxId = $(this).attr('id')
  const index = boxId.replace('box', '')

  // undefinedArray is used to keep track of whose turn it is.
  // X's will have an even undefinedArray.length. O's will have odd.
  const undefinedArray = linearBoard.filter((e, i, a) => e !== undefined)

// linearBoard has been initialized to 9 undefined elements. The value of
// undefined here means that the space is available to be played. This test
// prevents a space to be played more than once.
  if (linearBoard[index] === undefined) {
    linearBoard[index] = undefinedArray.length % 2 > 0 ? 'o' : 'x'
    $(this).text(linearBoard[index])
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
