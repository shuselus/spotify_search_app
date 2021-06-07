
import { combineReducers } from 'redux';import playlistReducer from './playlistReducer';
import currentPlaylistReducer from './currentPlaylistReducer';


const rootReducer = combineReducers({
  playlistReducer: playlistReducer,
  currentPlaylistReducer: currentPlaylistReducer,
});

export default rootReducer;