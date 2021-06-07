import React, {useEffect, useState, useCallback} from 'react'
import PlayListItem from './PlayListItem';
import Player from './Player';

const CurrentPlaylistArea = ({data}) => {
const [playlistItems, setPlaylistItems] = useState([]);
const [trackUri, setTrackUri] = useState([]);
const [albums, setAlbums] = useState([])

useEffect(()=>{
    console.log("PlaylistArea >>>> data: ", data);
    if(data && data.length > 0){
        setPlaylistItems([...data]);
        const albumsArr = data.map((item) => item.track.album.name);
        setAlbums([...albumsArr]);
    }else{
        setPlaylistItems([]);
    }
    
},[data]);

const selectChange = (e) => {
    console.log(e.target.value);
    setPlaylistItems([...data.filter((item) => item.track.album.name === e.target.value)])
}
const getFilterSelector = ()=>{
    return(
        <div className="select-cont">
            <span>filter by album`s name:</span>
            <select name="category" id="pl-category" onChange={(e) => selectChange(e)}>
                {
                albums.map((item, index)=> 
                <option value={item} key={index}>{item}</option>)
                }
            </select>
        </div>
     
    )
}

const getTrackUri = (uri) => {
    setTrackUri(uri)
}

//data.slice().sort((a, b) => b.date - a.date)

    return(
        
        <div className="playlist-area cont">
            <Player trackUri={trackUri}/>
            {
              albums.length > 0 && getFilterSelector()
            }
            {
                playlistItems.length > 0 && 
                    playlistItems.map((item, index) => 
                        <PlayListItem 
                            key={`pl${index}`} 
                            data={item}
                            getTrackUri={getTrackUri}
                        />
                    )
            }   
        </div>
    );
}
export default CurrentPlaylistArea;