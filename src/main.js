import LastfmApi from './lastfm-api'
import { extractAlbums, displayAlbums } from './util'

const topTracks = (user) => {
  LastfmApi.load(user)
    .then(extractAlbums)
    .then(displayAlbums)
}

const form = document.querySelector('#form_user')
const input = document.querySelector('#input_user')
const header_user = document.querySelector('#header_user')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (!input.value || !input.value.trim()) return

  topTracks(input.value)

  header_user.innerHTML = `${input.value}'s`
  input.value = ''
})

topTracks('jakedex')

export default {}
