import 'whatwg-fetch'

const API_KEY = '4bfe61b3a14af731881424a41d26dd28'

class LastfmApi {
  constructor() {
    this.lastfmURL = 'http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&api_key=4bfe61b3a14af731881424a41d26dd28&format=json&period=12month&limit=100'
  }

  loadTrack({ title, artist }) {
    return fetch(`${this.trackArtworkURL}&track=${title}&artist=${artist}`)
      .then(res => res.json())
  }

  load(username) {
    return fetch(`${this.lastfmURL}&user=${username}`)
      .then(res => res.json())
  }
}

export default new LastfmApi()
