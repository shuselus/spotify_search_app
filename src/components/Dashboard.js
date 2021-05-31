import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { initiateGetResult } from '../actions/initiateGetResult';
import { currentPlaylist } from '../actions/playlistAction';

export default function Dashboard() {
    const [searchValue, setSearchValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('albums');
    const dispatch = useDispatch()

    const onClickHandler = (e) => {
        e.preventDefault();
        if (searchValue.trim() !== '') {
           setErrorMsg('');
           setIsLoading(true);
           dispatch(initiateGetResult(searchValue)).then(() => {
               setSearchValue("")
               setIsLoading(false);
               setSelectedCategory('albums');
           });
           dispatch(currentPlaylist([]));
       
        } else {
           setErrorMsg('Please enter a search term.');
        }
    }
    const onChangeHandler = (e) => {
        setSearchValue(e.target.value);
    }
    return (
        <div className="dashboard-cont cont">
            <div className="search-cont">
                <input 
                className="search-input"
                type="text" 
                value={searchValue}
                placeholder="Artists, songs, or podcasts"
                onChange={(e) => onChangeHandler(e)}
                />
                <button className="search-btn" type="submit" onClick={(e) => onClickHandler(e)}>Search</button>
            </div >
            <div className="d-error-msg">
            {
                errorMsg && <p>{errorMsg}</p>
            }
            </div>
            
            
        </div>
    )
}
