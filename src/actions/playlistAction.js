import { get } from '../utils/api';

export const SET_PLAYLIST = 'SET_PLAYLIST';
export const ADD_PLAYLIST = 'ADD_PLAYLIST';
export const CURRENT_PLAYLIST = "CURRENT_PLAYLIST";

export const setPlayList = (playlists) => ({
    type: SET_PLAYLIST,
    playlists
  });
  
export const addPlaylist = (playlists) => ({
    type: ADD_PLAYLIST,
    playlists
});

export const currentPlaylist = (currentPlaylist) => ({
    type: CURRENT_PLAYLIST,
    currentPlaylist
});

export const initiateLoadMorePlaylist = (url) => {
    return async (dispatch) => {
      try {
        const result = await get(url);
        return dispatch(addPlaylist(result.playlists));
      } catch (error) {
        console.log('error', error);
      }
    };
  };

  export const getCurrentPlaylist = (url) => {
    return async (dispatch) => {
      try {
        const {items} = await get(url);
        return dispatch(currentPlaylist(items));
      } catch (error) {
        console.log('error>>>>>>>', error);
      }
    };
  };
  