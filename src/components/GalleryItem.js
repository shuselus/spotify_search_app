import React, {useState} from 'react';

const GalleryItem = ({data, loadMore}) => {
    const [category, setCategory] = useState(data.type);

    const onItemClick = (e) => {
        e.preventDefault();
        //if(category==="playlist")
        loadMore(data.tracks.href, category);
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
