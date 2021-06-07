import React, {useState} from 'react';

const GalleryItem = ({data, loadMore}) => {

    const onItemClick = (e) => {
        e.preventDefault();
        loadMore(data.tracks.href);
        console.log(data.images[0].url);
    }

    return (
        <div className="gallery-item" onClick={(e) =>onItemClick(e)}>
            <div className="img-placeholder">
               <img src={data.images[0].url} alt={`${data.name} image`} />
            </div>
            
            <p>{data.name}</p>
        </div>
    )
}

export default GalleryItem
