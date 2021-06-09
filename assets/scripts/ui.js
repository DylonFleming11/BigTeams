'use strict'
const store = require('./store')

const signUpSuccess = function (res) {
  $('#sign-up').trigger('reset')
  $('#messaging').text('Sign up successfully!')
}

const signUpFailure = function () {
  $('#messaging').text('Sign in error')
}

const signInSuccess = function (res) {
  $('#sign-in').trigger('reset')
  $('#messaging').text('Signed in successfully!')
  store.user = res.user
  $('.after-signin').show()
  $('.before-signin').hide()
  $('.change-singin').show()
}

const signInFailure = function () {
  $('#messaging').text('Sign in error')
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

const createTeamSuccess = function (res) {
  $('#create-team').trigger('reset')
  $('#messaging').text('Created Team successfully!')
  console.log(res)
  $('#teams').html(`
    <p>ID: ${res._id}</p>
    <p>STATE: ${res.state}</p>
    <p>CITY: ${res.city}</p>
    <p>NAME: ${res.name}</p>
    <p>STADIUM: ${res.stadium}</p>
    <p>SPORT: ${res.sport}</p>
  `)
}

const createTeamFailure = function () {
  $('#messaging').text('Failed to create Team')
}

const indexTeamSuccess = function (res) {
  // const teams = res.team
  console.log(res)
  $('#index-team').trigger('reset')
  $('#messaging').text('Showing Teams successfully!')
  let teamsHtml = ''
  res.forEach(teams => {
    teamsHtml += `
    <p>ID: ${teams._id}</p>
    <p>STATE: ${teams.state}</p>
     <p>CITY: ${teams.city}</p>
     <p>NAME: ${teams.name}</p>
     <p>STADIUM: ${teams.stadium}</p>
     <p>SPORT: ${teams.sport}</p>
    `
  })
  $('#teams').html(teamsHtml)
}

const indexTeamFailure = function () {
  $('#messaging').text('Failed to show Teams')
}

const showTeamSuccess = function (res) {
  $('#show-team').trigger('reset')
  $('#messaging').text('Found Team successfully!')
  $('#teams').html(`
    <p>ID: ${res._id}</p>
    <p>STATE: ${res.state}</p>
    <p>CITY: ${res.city}</p>
    <p>NAME: ${res.name}</p>
    <p>STADIUM: ${res.stadium}</p>
    <p>SPORT: ${res.sport}</p>
  `)
}

const showTeamFailure = function () {
  $('#messaging').text('Failed to find Team')
}

const updateTeamSuccess = function (res) {
  $('#update-team').trigger('reset')
  $('#messaging').text('Updated Team successfully!')
  $('#teams').text('Trying searching your updated team by ID!')
  // $('#teams').html(`
  //   <p>ID: ${res._id}</p>
  //   <p>STATE: ${res.state}</p>
  //   <p>CITY: ${res.city}</p>
  //   <p>NAME: ${res.name}</p>
  //   <p>STADIUM: ${res.stadium}</p>
  //   <p>SPORT: ${res.sport}</p>
  // `)
}

const updateTeamFailure = function () {
  $('#messaging').text('Failed to update Team')
}

const deleteTeamSuccess = function (res) {
  $('#delete-team').trigger('reset')
  $('#messaging').text('Deleted Team successfully!')
  $('#teams').text('')
}

const deleteTeamFailure = function () {
  $('#messaging').text('Failed to delete Team')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePassSuccess,
  changePassFailure,
  signOutSuccess,
  signOutFailure,
  createTeamSuccess,
  createTeamFailure,
  indexTeamSuccess,
  indexTeamFailure,
  showTeamSuccess,
  showTeamFailure,
  updateTeamSuccess,
  updateTeamFailure,
  deleteTeamSuccess,
  deleteTeamFailure
}
