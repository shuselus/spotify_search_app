import { get } from '../utils/api';

export const SET_ARTISTS = 'SET_ARTISTS';
export const ADD_ARTISTS = 'ADD_ARTISTS';

export const setArtists = (artists) => ({
    type: SET_ARTISTS,
    artists
  });
  
export const addArtists = (artists) => ({
    type: ADD_ARTISTS,
    artists
});

  export const initiateLoadMoreArtists = (url) => {
    return async (dispatch) => {
      try {
        const result = await get(url);
        return dispatch(addArtists(result.artists));
      } catch (error) {
        console.log('error', error);
      }
    };
  };