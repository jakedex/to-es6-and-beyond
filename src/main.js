import LastfmApi from './lastfm-api'

LastfmApi.load()
  .then(j => console.log(j))

export default {}
