import { get } from '../utils/api';

export const SET_ALBUMS = 'SET_ALBUMS';
export const ADD_ALBUMS = 'ADD_ALBUMS';

export const setAlbums = (albums) => ({
    type: SET_ALBUMS,
    albums
  });
  
export const addAlbums = (albums) => ({
    type: ADD_ALBUMS,
    albums
});

export const initiateLoadMoreAlbums = (url) => {
    return async (dispatch) => {
      try {
        const result = await get(url);
        return dispatch(addAlbums(result.albums));
      } catch (error) {
        console.log('error', error);
      }
    };
  };