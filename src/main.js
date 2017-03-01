import { loadAlbums } from './api'
import { extractAlbums, insertAlbums } from './util'

const form = document.querySelector('#form_user')
const input = document.querySelector('#input_user')
const headerUser = document.querySelector('#header_user')

const displayTopAlbums = user =>
  loadAlbums(user)
    .then(extractAlbums)
    .then(insertAlbums)

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (!input.value || !input.value.trim()) return

  displayTopAlbums(input.value)

  headerUser.innerHTML = `${input.value}'s`
  input.value = ''
})

displayTopAlbums('jakedex')
