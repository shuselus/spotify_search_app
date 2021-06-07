import React, {useEffect, useCallback, useMemo} from 'react'
import PlaylistsGallery from './PlaylistsGallery';
import CurrentPlaylistArea from './CurrentPlaylistArea';
import { useSelector } from "react-redux";
//import {initiateLoadMorePlaylist} from '../actions/playlistAction';
//import {getCurrentPlaylist} from '../actions/playlistAction';


const SearchResult = () => {
    const playlists = useSelector((state) => state.playlistReducer); 
    const currentPlaylist = useSelector((state) => state.currentPlaylistReducer); 

    const playlistsData = useMemo(()=>{
        //console.log("SearchResult>>>>playlists", playlists);
        return playlists
    }
     ,[playlists]);

     const currentPlaylistData = useMemo(()=> {
        // console.log("SearchResult>>>>>currentPlaylist", currentPlaylist);
         return currentPlaylist;
    }
      ,[currentPlaylist]);

    
    return (
        <div className="gallery-cont">
            { 
              currentPlaylistData && currentPlaylistData.length > 0
              ?
                <CurrentPlaylistArea data={currentPlaylistData} />
              :
              playlistsData && playlistsData.length > 0 &&
                <PlaylistsGallery data={playlistsData} />
            }
        </div>
    )
}

export default SearchResult

