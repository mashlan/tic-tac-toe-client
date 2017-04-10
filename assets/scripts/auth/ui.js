'use strict'
const store = require('../store')

const signUpSuccess = (data) => {
  console.log('signUpSuccess ran: ', data)
  $('.alert').hide()
  $('.alert-success').show()
  $('#alert-success-message').text(' Account created. Sign in for Tic Tac Toe.')
  $('#sign-up').trigger('reset')
}

const signUpFailure = (error) => {
  console.error('signUpFailure ran: ', error)
  $('#alert-danger-message').text(' Email already exists.')
  $('#global-alert-danger').show()
}

const signInSuccess = (data) => {
  $('#sign-in').trigger('reset')
  $('.authentication').hide()
  store.user = data.user
  $('.dropdown-toggle').html(store.user.email + ' <span class="caret"></span>')
  $('.nav').show()
  $('.game-options').show()
  $('.not-signed-in').hide()
  console.log('signInSuccess ran: ', store)
}

const signInFailure = (error) => {
  console.error('signInFailure ran:', error)
  $('.alert').hide()
  $('#alert-danger-message').text(' Email or password is incorrect.')
  $('#global-alert-danger').show()
}
const signOutSuccess = () => {
  console.log('signOutSuccess ran')
  store.user = null
  $('.alert').hide()
  $('.authentication').show()
  $('.account-change').hide()
  $('.game-options').hide()
  $('.jumbotron').show()
  $('.tic-tac-toe-grid').hide()
  $('.game-stats').hide()
  $('.nav').hide()
  $('.not-signed-in').show()
}

const signOutFailure = (error) => {
  $('.alert').hide()
  $('#alert-danger-message').text(' Unexpected system error.')
  $('#global-alert-danger').show()
}

const changePasswordSuccess = () => {
  $('.alert').hide()
  $('.alert-success').show()
  $('#alert-success-message').text(' Password changed.')
  $('#change-password').trigger('reset')
}

const changePasswordFailure = (error) => {
  console.error('changePasswordFailure ran:', error)
  $('#alertMessage').text(' Cannot change password.')
  $('.alert').show()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
