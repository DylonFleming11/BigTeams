'use strict'

const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePass = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePass(data)
    .then(ui.changePassSuccess)
    .catch(ui.changePassFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreateTeam = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createTeam(data)
    .then(ui.createTeamSuccess)
    .catch(ui.createTeamFailure)
}

const onIndexTeam = function (event) {
  event.preventDefault()
  api.indexTeam()
    .then(ui.indexTeamSuccess)
    .catch(ui.indexTeamFailure)
}

const onShowTeam = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showTeam(data.team.id)
    .then(ui.showTeamSuccess)
    .catch(ui.showTeamFailure)
}

const onUpdateTeam = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = data.team.id
  api.updateTeam(id, data)
    .then(ui.updateTeamSuccess)
    .catch(ui.updateTeamFailure)
}

const onDeleteTeam = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteTeam(data.team.id)
    .then(ui.deleteTeamSuccess)
    .catch(ui.deleteTeamFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePass,
  onSignOut,
  onCreateTeam,
  onIndexTeam,
  onShowTeam,
  onUpdateTeam,
  onDeleteTeam
}
