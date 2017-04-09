'use strict'
const showTtlGames = function (games) {

}

const showTtlGamesCompleted = function () {

}

const showTtlGamesAbandoned = function () {

}

const showTtlGamesWon = function () {

}

const showTtlGamesLost = function () {

}

const displayGameStats = function (games) {
  $('#all-games').text('Total Games Played: ' + games.length)
}

module.exports = {
  showTtlGames,
  showTtlGamesCompleted,
  showTtlGamesAbandoned,
  showTtlGamesWon,
  showTtlGamesLost,
  displayGameStats
}
