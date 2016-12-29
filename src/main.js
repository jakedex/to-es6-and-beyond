import LastfmApi from './lastfm-api'
import { extractAlbums, displayAlbums } from './util'

const topTracks = (user) => {
  LastfmApi.load(user)
    .then(extractAlbums)
    .then(displayAlbums)
}

const form = document.querySelector('#form_user')
const input = document.querySelector('#input_user')

form.addEventListener('submit', (e) => {
  console.log('clicked!')
  e.preventDefault()
  if (!input.value || !input.value.trim()) return

  topTracks(input.value)
})

topTracks('jakedex')

export default {}
