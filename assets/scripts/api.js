const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    data,
    url: config.apiUrl + '/sign-up'
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    data,
    url: config.apiUrl + '/sign-in'
  })
}

const changePass = function (data) {
  return $.ajax({
    method: 'PATCH',
    data,
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const createTeam = function (data) {
  return $.ajax({
    method: 'POST',
    data,
    url: config.apiUrl + '/teams',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const indexTeam = function (data) {
  return $.ajax({
    method: 'GET',
    data,
    url: config.apiUrl + '/teams',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const showTeam = function (data) {
  return $.ajax({
    method: 'GET',
    data,
    url: config.apiUrl + '/teams/:id',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const updateTeam = function (id, data) {
  return $.ajax({
    method: 'PATCH',
    data,
    url: config.apiUrl + '/teams/:id',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const deleteTeam = function (data) {
  return $.ajax({
    method: 'DELETE',
    data,
    url: config.apiUrl + '/teams/:id',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}
module.exports = {
  signUp,
  signIn,
  changePass,
  signOut,
  createTeam,
  indexTeam,
  showTeam,
  updateTeam,
  deleteTeam
}
