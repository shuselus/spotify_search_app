import React, {useEffect, useState, useCallback} from 'react'
import GalleryItem from './GalleryItem';
import PlayListItem from './PlayListItem';
import { useDispatch, useSelector } from "react-redux";
import {initiateLoadMoreAlbums} from '../actions/albumsAction';
import {initiateLoadMoreArtists} from '../actions/artistsAction';
import {initiateLoadMorePlaylist} from '../actions/playlistAction';
import {getCurrentPlaylist} from '../actions/playlistAction';

const Gallery = ({data}) => {
    const [galleryList, setGalleryList] = useState([...data]);
    const [playlistItems, setPlaylistItems] = useState([]);
    const currentPlaylists = useSelector((state) => state.currentPlaylistReducer); 
    useEffect(()=>{
        setGalleryList([...data])
    },[data]);

    useEffect(()=>{
        console.log(currentPlaylists);
        if(currentPlaylists && currentPlaylists.items && currentPlaylists.items.length > 0){
            setPlaylistItems([...currentPlaylists.items]);
        }else{
            setPlaylistItems([]);
        }
        
    },[currentPlaylists]);

    // const updateCurrentPlayList = useCallback(()=>{
    //     setPlaylistItems(...currentPlaylists.items)
    // },[currentPlaylists])

    const dispatch = useDispatch();
    const loadMore = async (url,type) => {
         // const { dispatch, albums, artists, playlist } = props;
          //setIsLoading(true);
          switch (type) {
            case 'albums':
              await dispatch(initiateLoadMoreAlbums(url));
              break;
            case 'artists':
              await dispatch(initiateLoadMoreArtists(url));
              break;
            case 'playlist':
              await dispatch(getCurrentPlaylist(url));
              break;
            default:
          }
         // setIsLoading(false);
    };

    return (
        <div className="gallery-cont">
            
            {
                
               playlistItems.length === 0 && galleryList.length > 0 ? 
               <div className="grid-container">
                   {
                    galleryList.map((item, index) => 
                        <GalleryItem 
                            key={`gal${index}`} 
                            data={item}
                            loadMore={loadMore}
                        />
                    )
                   }
                </div>
               :
               <div className="cont">
                   {
                     playlistItems.length > 0 && 
                       playlistItems.map((item, index) => 
                       <PlayListItem 
                            key={`pl${index}`} 
                            data={item}
                        />
                    )
                   }
               </div>
            }
            

        </div>
    )
}
export default Gallery;
