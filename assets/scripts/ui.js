'use strict'
const store = require('./store')

const signUpSuccess = function (res) {
  $('#sign-up').trigger('reset')
  $('#messaging').text('Sign up successfully!')
}

const signUpFailure = function (err) {
  console.log(err)
  $('#messaging').text('Sign in error' + err)
}

const signInSuccess = function (res) {
  $('#sign-in').trigger('reset')
  $('#messaging').text('Signed in successfully!')
  store.user = res.user
}

const signInFailure = function (err) {
  console.log(err)
  $('#messaging').text('Sign in error' + err)
}

const changePassSuccess = function (res) {
  $('#change-pass').trigger('reset')
  $('#messaging').text('Changed password successfully!')
}

const changePassFailure = function (res) {
  $('#messaging').text('Failed to change password')
}

const signOutSuccess = function (res) {
  store.user = null
  $('#messaging').text('succesfully Signed Out!')
}

const signOutFailure = function () {
  $('#messaging').text('Failed to sign out')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePassSuccess,
  changePassFailure,
  signOutSuccess,
  signOutFailure
}
