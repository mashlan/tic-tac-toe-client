'use strict'
const winLogic = require('../lib/winLogic')

const getTtlGamesFinished = function (games) {
  const allGamesFinished = games.filter(e => e.over)
  // console.log('all games finished: ', allGamesFinished)
  return allGamesFinished
}

const getTtlGamesAbandoned = function (games) {
  const allGamesAbandoned = games.filter(e => !e.over)
  // console.log('all games finished: ', allGamesAbandoned)
  return allGamesAbandoned
}

const getTtlGamesWon = function (games) {
  let allGamesWon = []
  allGamesWon = getTtlGamesFinished(games).filter(e => winLogic.getWinner(e.cells))
  return allGamesWon
}

const getTtlGamesLost = function (games) {
  let allGamesLost = []
  allGamesLost = getTtlGamesFinished(games).filter(e => !winLogic.getWinner(e.cells))
  return allGamesLost
}

const displayGameStats = function (games) {
  $('#all-games').text('Total Games Started: ' + games.length)
  $('#total-games-finished').text('Total Games Finished: ' + getTtlGamesFinished(games).length)
  $('#total-games-abandoned').text('Total Games Abandoned: ' + getTtlGamesAbandoned(games).length)
  $('#total-games-won').text('Total Games Won: ' + getTtlGamesWon(games).length)
  $('#total-games-lost').text('Total Games Lost: ' + getTtlGamesLost(games).length)
}

module.exports = {
  displayGameStats
}
