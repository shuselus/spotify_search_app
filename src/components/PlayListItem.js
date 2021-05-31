import React, {useState, useEffect} from 'react'

 const PlayListItem = ({data}) => {
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
        //play track //data.track.uri
    }

    return (

        <div className="pl-item">
                <div className="pl-img-placeholder">
                  <img src={image} alt={`albume image`} />
                </div>      
                <div className="cont  mrg-l">         
                    <p>{`artist: ${data.track.album.artists[0].name}`}</p>
                    <p>{`album: ${data.track.album.name}`}</p>
                    <p>{`track: ${data.track.name}`}</p>
                </div>
                <button className="pl-play-btn" onClick={(e)=>onClickHandler(e)}>play</button>
        </div>
    )
}
export default PlayListItem;