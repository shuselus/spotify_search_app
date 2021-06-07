import React, {useCallback, useMemo} from 'react'
import PlaylistsGallery from './PlaylistsGallery';
import CurrentPlaylistArea from './CurrentPlaylistArea';
import { useSelector } from "react-redux";
//import {initiateLoadMorePlaylist} from '../actions/playlistAction';
//import {getCurrentPlaylist} from '../actions/playlistAction';


const SearchResult = () => {
    const playlists = useSelector((state) => state.playlistReducer); 
    const currentPlaylists = useSelector((state) => state.currentPlaylistReducer); 
    

    const playlistsData = useMemo(()=>{
        console.log("SearchResult>>>>playlists", playlists)
        return playlists.items
    }
     ,[playlists]);

    const currentPlaylistData = useMemo(()=>
       currentPlaylists.items
     ,[currentPlaylists]);

    
    return (
        <div className="gallery-cont">
            {
              currentPlaylists && currentPlaylists.items && currentPlaylists.items.length > 0
              ?
                <CurrentPlaylistArea data={currentPlaylistData} />
              :
              playlists && playlists.items && playlists.items.length > 0 &&
                <PlaylistsGallery data={playlistsData} />
            }
        </div>
    )
}

export default SearchResult

