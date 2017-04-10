'use strict'
const store = require('../store')
const gameStats = require('./gameStats')

const createSuccess = (data) => {
  store.game = data.game
  $('.alert').hide()
  $('.authentication').hide()
  $('.account-change').hide()
  $('.jumbotron').hide()
  $('.game-options').hide()
  $('.tic-tac-toe-grid').show()
  $('.game-stats').hide()
}
const createFailure = (error) => {
  $('#alert-danger-message').text(' Cannot start new game.')
  $('.alert-danger').show()
}

const updateSuccess = (data) => {
  $('.alert').hide()
  console.log('updateSuccess ran')
  store.game = data.game
  console.log(store.game)
}
const updateFailure = (error) => {
  $('#alertMessage').text(' Cannot save move.')
  $('.alert').show()
  console.error('updateFailure ran:', error)
}

const getStatsSuccess = (data) => {
  $('.alert').hide()
  $('.tic-tac-toe-grid').hide()
  console.log('getStatsSuccess ran: ', data)
  store.gameStats = data.games
  console.log('gestStatusSuccess store.gameStats: ', store)
  gameStats.displayGameStats(store.gameStats)
}
const getStatsFailure = (error) => {
  $('#alertMessage').text(' Cannot get game statistics.')
  $('.alert').show()
  console.error('getStatsFailure ran:', error)
}

module.exports = {
  createSuccess,
  createFailure,
  updateSuccess,
  updateFailure,
  getStatsSuccess,
  getStatsFailure
}
