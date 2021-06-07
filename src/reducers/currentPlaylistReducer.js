import {CURRENT_PLAYLIST} from '../actions/playlistAction';

const currentPlaylistReducer = (state = [], action) => {
   const { currentPlaylist } = action;
  switch (action.type) {
    case CURRENT_PLAYLIST:
      return  currentPlaylist;
    default:
      return state;
  }
};

export default currentPlaylistReducer;
