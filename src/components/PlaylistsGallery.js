import React, {useEffect, useState} from 'react'
import GalleryItem from './GalleryItem';
import { useDispatch } from "react-redux";
//import {initiateLoadMorePlaylist} from '../actions/playlistAction';
import {getCurrentPlaylist} from '../actions/playlistAction';

const PlaylistsGallery = ({data}) => {
    const [galleryList, setGalleryList] = useState(data);
   // const [isLoading, setIsLoading] = useState(true);
   
    useEffect(()=>{
        setGalleryList([...data])
    },[data]);

    const dispatch = useDispatch();

    const loadMore = (url) => {
         dispatch(getCurrentPlaylist(url));
       // setIsLoading(true);
    };

    return (
        <div className="gallery-cont">
          {
            galleryList.length > 0 &&
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
            }
        </div>
    )
}
export default PlaylistsGallery;
