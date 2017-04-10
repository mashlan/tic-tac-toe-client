'use strict'
const winLogic = require('../lib/winLogic')
const api = require('./api')
const ui = require('./ui')

let linearBoard = new Array(9)

let gameDone = false
let nextToken = 'o'
let token = 'x'
let gameDelta = {}
let winnerExists = false
let filledSpace = []

const onGoHome = function () {
  $('.alert').hide()
  $('.authentication').hide()
  $('.account-change').hide()
  $('.game-options').show()
  $('.jumbotron').show()
  $('.tic-tac-toe-grid').hide()
  $('.game-stats').hide()
}
const onStartNewGame = function (event) {
  // initialize variables. start with a clean slate
  event.preventDefault()
  $('.game-options').hide()
  gameDone = false
  winnerExists = false
  token = 'x'
  nextToken
  gameDelta = {}
  filledSpace
  linearBoard = new Array(9)

  // clear the banner
  $('.banner').text("Let's play!")
  // clear the tic tac toe board
  $('.box').text('')

  api.createGame()
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

const createGameDelta = function (index, value, over) {
  const intIndex = parseInt(index)
  return {
    game: {
      cell: {
        index: intIndex,
        value: value
      },
      over: over
    }
  }
}
const onSelection = function (event) {
  // the boxId value double as an index to the linear
  // tic tac toe grid when the word 'box' is removed
  event.preventDefault()
  const boxId = $(this).attr('id')
  const index = boxId.replace('box', '')

  // filledSpace is used to keep track of whose turn it is.
  // X's will have an even filledSpace.length. O's will have odd.
  filledSpace = linearBoard.filter(e => e !== '')

  // linearBoard has been initialized to 9 undefined elements. The value of
  // undefined here means that the space is available to be played.
  // The first test checks to see if all spaces are filled. If so, then
  // the game is done. If not, then if an unfilled space is clicked on
  // then the linearBoard is populated.

  if (gameDone) {
  } else if (linearBoard[index] === undefined) {
    token = filledSpace.length % 2 > 0 ? 'o' : 'x'
    nextToken = filledSpace.length % 2 > 0 ? 'x' : 'o'
    linearBoard[index] = token
    filledSpace.push(token)
    $(this).text(token)
    $('.banner').text(nextToken + "'s turn")

    winnerExists = winLogic.getWinner(linearBoard)

    if (winnerExists) {
      gameDone = true
      $('.banner').text(linearBoard[index] + ' WINS!')
    } else if (filledSpace.length === 9) {
      $('.banner').text('Game is tied!')
      gameDone = true
    }
    gameDelta = createGameDelta(index, token, gameDone)
    api.updateGame(gameDelta)
      .then(ui.updateSuccess)
      .catch(ui.updateFailure)
  }
}

const onGetGameStats = function (event) {
  event.preventDefault()
  $('.alert').hide()
  $('.authentication').hide()
  $('.account-change').hide()
  $('.game-options').hide()
  $('.jumbotron').hide()
  $('.tic-tac-toe-grid').hide()
  $('.game-stats').show()
  api.getStats()
    .then(ui.getStatsSuccess)
    .catch(ui.getStatsFailure)
}

const addHandlers = () => {
  $('.home-nav').on('click', onGoHome)
  $('.new-game-button').on('click', onStartNewGame)
  $('.new-game-nav').on('click', onStartNewGame)
  $('.box').on('click', onSelection)
  $('.game-stats-button').on('click', onGetGameStats)
  $('.game-stats-nav').on('click', onGetGameStats)
}
module.exports = {
  addHandlers
}
