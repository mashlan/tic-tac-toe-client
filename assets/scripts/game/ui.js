'use strict'
const store = require('../store')

const createSuccess = (data) => {
  console.log('createSuccess ran')
  store.game = data.game
  console.log(store.game)
}
const createFailure = (error) => {
  console.error('createFailure ran:', error)
}

const updateSuccess = (data) => {
  console.log('updateSuccess ran')
  store.game = data.game
  console.log(store.game)
}
const updateFailure = (error) => {
  console.error('updateFailure ran:', error)
}

const getStatsSuccess = (data) => {
  console.log('getStatsSuccess ran: ', data)
  store.gameStats = data.games
  console.log('gestStatusSuccess store.gameStats: ', store)
  // store.games = data.games
}
const getStatsFailure = (error) => {
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
