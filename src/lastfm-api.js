import fetch from 'whatwg-fetch'

const API_KEY = '4bfe61b3a14af731881424a41d26dd28'

class LastfmApi {
  constructor() {
    this.lastfmURL = 'http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=rj&api_key=4bfe61b3a14af731881424a41d26dd28&format=json'
  }

  load() {
    return fetch(this.lastfmURL)
      .then(res => res.json())
  }
}

export default new LastfmApi()
