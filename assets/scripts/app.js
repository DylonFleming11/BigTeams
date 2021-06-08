'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pass').on('submit', authEvents.onChangePass)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#create-team').on('submit', authEvents.onCreateTeam)
  $('#index-team').on('click', authEvents.onIndexTeam)
  $('#show-team').on('submit', authEvents.onShowTeam)
  $('#update-team').on('submit', authEvents.onUpdateTeam)
  $('#delete-team').on('submit', authEvents.onDeleteTeam)
})
