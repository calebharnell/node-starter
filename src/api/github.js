const axios = require('axios')

const github = axios.create({
  baseURL: 'https://api.github.com'
})

function reposBy(username) {
  return github.get(`/users/${username}/repos`)
}

function repoInfo(username, reponame) {
  return github.get(`/users/${username}/${reponame}`)
}

module.exports = { reposBy, repoInfo }
