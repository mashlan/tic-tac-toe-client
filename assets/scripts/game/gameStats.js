'use strict'
const showTtlGames = function (games) {

}

const getTtlGamesFinished = function (games) {
  const allGamesFinished = games.filter(e => e.over)
  console.log('all games finished: ', allGamesFinished)
  return allGamesFinished.length
}

const showTtlGamesAbandoned = function () {

}

const showTtlGamesWon = function () {

}

const showTtlGamesLost = function () {

}

const displayGameStats = function (games) {
  $('#all-games').text('Total Games Played: ' + games.length)
  $('#total-games-finished').text('Total Games Finished: ' + getTtlGamesFinished(games))
}

module.exports = {
  showTtlGames,
  showTtlGamesAbandoned,
  showTtlGamesWon,
  showTtlGamesLost,
  displayGameStats
}
