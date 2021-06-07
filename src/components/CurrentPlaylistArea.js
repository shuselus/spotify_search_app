import React, {useEffect, useState, useCallback} from 'react'
import PlayListItem from './PlayListItem';
import Player from './Player';

const CurrentPlaylistArea = ({data}) => {
const [playlistItems, setPlaylistItems] = useState([]);
const [trackUri, setTrackUri] = useState([]);
const [albums, setAlbums] = useState([])
let sortByDateFlag = false;

useEffect(()=>{
    console.log("CurrentPlaylistArea >>>> data: ", data);
    if(data && data.length > 0){
        setPlaylistItems([...data]);
        const albumsArr = data.map((item) => item.track.album.name);
        setAlbums([...albumsArr]);
        setTrackUri(data[0].track.uri)
    }else{
        setPlaylistItems([]);
    }
},[data]);

const selectChange = (e) => {
    console.log(e.target.value);
    setPlaylistItems([...data.filter((item, pos) => item.track.album.name === e.target.value)])
    //to do filter also duplicates;
}

const getFilterSelector = ()=>{
    if(albums.length>0){
        return(
            <div className="select-cont"> 
                <span className="mrg-r">filter by album`s name:</span>
                <select name="category" id="pl-category" onChange={(e) => selectChange(e)}>
                    {
                     albums.map((item, index)=> 
                     <option value={item} key={index}>{item}</option>)
                    }
                   
                </select>
            </div>
        )
    }else{
        return null
    }
   
}
   
const sortItemsByDate = (e) => {
    e.preventDefault();
    const sortedByDate = data.slice().sort((a, b) => {
        if(!sortByDateFlag){
            return new Date(b.added_at) - new Date(a.added_at)
        }else{
            return new Date(a.added_at) + new Date(b.added_at)
        }
        
    });
    sortByDateFlag = !sortByDateFlag
    setPlaylistItems([...sortedByDate]);
}

const getTrackUri = useCallback((uri) => {
    setTrackUri(uri)
},[trackUri, setTrackUri]);

    return(
        
        <div className="playlist-area cont">
            <Player trackUri={trackUri}/>
            <div className="control-panel cont">
            {
              getFilterSelector()
            }
            {
                <div className="sort-by-date-btn" style={{flexFlow:"row"}} onClick={(e) => sortItemsByDate(e)}>
                    <span className="mrg-r">sort by date</span>
                </div>
            }
            </div>
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