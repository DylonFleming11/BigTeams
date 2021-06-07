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
    header: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    header: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const createTeam = function (data) {
  return $.ajax({
    method: 'POST',
    data,
    url: config.apiUrl + '/create',
    header: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const indexTeam = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/index',
    heeader: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const showTeam = function (data) {
  return $.ajax({
    method: 'GET',
    data,
    url: config.apiUrl + '/show',
    header: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const updateTeam = function (data) {
  return $.ajax({
    method: 'PATCH',
    data,
    url: config.apiUrl + '/update',
    header: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const deleteTeam = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/destroy',
    header: {
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
