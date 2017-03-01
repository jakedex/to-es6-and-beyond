import loadTrack from './api'

const getImageURL = images =>
  images.filter(image => image.size === 'extralarge')[0]['#text']

const getAlbumHTML = ({ name: title, artist, url, image }) =>
    `<a class="album" data-artist="${artist.name}" href="${url}"><span>${title}</span><img class="art" src="${getImageURL(image)}" /></a>`

const getGalleryContents = albums =>
  albums.filter(album => getImageURL(album.image))
        .map(getAlbumHTML)
        .join('\n')

export const extractAlbums = res => res.topalbums.album

export const loadTrackArtworks = tracks =>
  Promise.all(tracks.map(loadTrack))
         .then(responses => responses.filter(res => res && res.track))

export const insertAlbums = albums =>
  document.querySelector('#gallery').innerHTML = getGalleryContents(albums)
