import mirror from 'mirrorx'
import { arrayMove } from 'react-sortable-hoc'

import { nextPlaybackRate, setPlaybackRate } from '../helpers'

export default mirror.model({
  name: 'player',
  initialState: {
    nowPlaying: {},
    playlist: [],
    playbackrate: 1
  },
  reducers: {

    play (state, episode) {
      return { ...state, nowPlaying: episode }
    },

    addToPlaylist (state, episode) {
      return { ...state, playlist: [...state.playlist, episode] }
    },

    removeFromPlaylist (state, episodeToRemove) {
      const playlist = state.playlist
        .filter(episode => episode.id !== episodeToRemove.id)
      return { ...state, playlist }
    },

    resortPlaylist (state, data) {
      const playlist = arrayMove(state.playlist, data.oldIndex, data.newIndex)
      return { ...state, playlist }
    },

    hydratePlaylist (state) {
      const localPlaylist = JSON.parse(window.localStorage.getItem('playlist'))
      return { ...state, playlist: localPlaylist }
    },

    playNextEpisode (state) {
      const currentlyPlaying = state.nowPlaying
      const playlist = state.playlist
        .slice()
        .filter(episode => episode.audioUrl !== currentlyPlaying.audioUrl)
      const nowPlaying = playlist.shift() || {}
      return { ...state, nowPlaying, playlist }
    },

    playNext (state, episode) {
      const newPlaylist = state.playlist
        .filter(item => item.audioUrl !== episode.audioUrl)
      return { ...state, playlist: [episode, ...newPlaylist] }
    },

    nextPlaybackRate (state) {
      const playbackrate = nextPlaybackRate(state.playbackrate)
      setPlaybackRate(playbackrate)
      return { ...state, playbackrate }
    },

    updateWidth (state, width) {
      console.log('updating width:', width)
      return { ...state, containerWidth: width }
    }

  }
})
