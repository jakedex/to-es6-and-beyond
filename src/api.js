import 'whatwg-fetch'

const API_KEY = '4bfe61b3a14af731881424a41d26dd28'
const TOP_ALBUMS_URL = `http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&api_key=${API_KEY}&format=json&period=12month&limit=100`

export const loadTrack = ({ title, artist }) =>
  fetch(`${TOP_ALBUMS_URL}&track=${title}&artist=${artist}`)
  .then(res => res.json())

export const loadAlbums = username =>
  fetch(`${TOP_ALBUMS_URL}&user=${username}`)
  .then(res => res.json())
