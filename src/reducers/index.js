
import { combineReducers } from 'redux';
import albumsReducer from './albumsReducer';
import artistsReducer from './artistsReducer';
import playlistReducer from './playlistReducer';
import currentPlaylistReducer from './currentPlaylistReducer';


const rootReducer = combineReducers({
  albumsReducer: albumsReducer,
  artistsReducer: artistsReducer,
  playlistReducer: playlistReducer,
  currentPlaylistReducer: currentPlaylistReducer,
});

export default rootReducer;