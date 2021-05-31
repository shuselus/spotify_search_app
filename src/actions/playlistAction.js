import { get } from '../utils/api';

export const SET_PLAYLIST = 'SET_PLAYLIST';
export const ADD_PLAYLIST = 'ADD_PLAYLIST';
export const GET_PLAYLIST = "GET_PLAYLIST";

export const setPlayList = (playlists) => ({
    type: SET_PLAYLIST,
    playlists
  });
  
export const addPlaylist = (playlists) => ({
    type: ADD_PLAYLIST,
    playlists
});

export const currentPlaylist = (currentPlaylist) => ({
    type: GET_PLAYLIST,
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
        const result = await get(url);
        return dispatch(currentPlaylist(result));
      } catch (error) {
        console.log('error', error);
      }
    };
  };
  