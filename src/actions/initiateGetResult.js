import * as playlistAction from './playlistAction';
import { get } from '../utils/api';

export const initiateGetResult = (searchTerm) => {
    return async (dispatch) => {
      try {
        const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
          searchTerm
        )}&type=album,playlist,artist`;
        const result = await get(API_URL);
        console.log(result);
        const { playlists } = result;
        return dispatch(playlistAction.setPlayList(playlists.items));
      } catch (error) {
        console.log('error', error);
      }
    };
  };