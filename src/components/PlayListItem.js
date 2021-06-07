import React, {useState, useEffect} from 'react';
import playBtn from '../svg/playBtn.svg'

 const PlayListItem = ({data, getTrackUri}) => {
    const [image, setImage] = useState("");

    useEffect(()=>{
        if(data.track.album.images &&  data.track.album.images.length === 3){
            setImage(data.track.album.images[2].url);
        }else if(data.track.album.images &&  data.track.album.images.length === 2){
            setImage(data.track.album.images[1].url);
        }else if(data.track.album.images &&  data.track.album.images.length > 0){
            setImage(data.track.album.images[0].url);
        }
    },[]);

    const onClickHandler = (e) => {
        e.preventDefault();
        getTrackUri(data.track.uri)
        //play track //data.track.uri
    }

    return (

        <div className="pl-item">
                <div className="pl-img-placeholder">
                  <img src={image} alt={`albume image`} />
                </div>      
                <div className="cont  mrg-l">         
                    <div><strong>{`artist: ${data.track.album.artists[0].name}`}</strong></div>
                    <span><strong>album: </strong>{data.track.album.name}</span>
                    <span>{`track: ${data.track.name}`}</span>
                </div>
                <div className="pl-play-btn mrg-l" onClick={(e)=>onClickHandler(e)}>
                <svg  height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true">
   <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="#fff"></polygon>
</svg>
                </div>
        </div>
    )
}
export default PlayListItem;