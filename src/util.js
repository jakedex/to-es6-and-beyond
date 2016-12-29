import LastfmApi from './lastfm-api'

const getImageURL = (images, size = 'extralarge') => images.filter(image => image.size === size)[0]['#text']

export const extractAlbums = res => res.topalbums.album

export const loadTrackArtworks = (tracks) => {
  return Promise.all(tracks.map(track => LastfmApi.loadTrack(track)))
    .then(responses => responses.filter(res => res && res.track))
}

export const displayAlbums = (albums) => {
  const elem = document.querySelector('#gallery')
  elem.innerHTML = albums
    .filter(album => getImageURL(album.image))
    .map(({ name: title, artist, url, image }) => {
      return `<a data-title="${title}" data-artist="${artist.name}" href="${url}"><img src="${getImageURL(image)}" /></a>`
    }).join('\n')
}
