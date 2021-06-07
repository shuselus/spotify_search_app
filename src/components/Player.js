import React from 'react'
import SpotifyPlayer from 'react-spotify-web-playback';

//Required scopes: ["streaming", "user-read-email", "user-read-private"]

const Player = ({trackUri}) => {
    const access_token = JSON.parse(localStorage.getItem('params')).access_token;
    
    return (
        <SpotifyPlayer 
           token = 'BQBgF89H-juZRCz5cQVJXTP3h0kXnB69Zd0t4LnoFOxKTfkCCtQQds674C4dpNLEfhsdvXUOuJi2hNFYwVPUyktLtBtBGE56CNXrCZtRXrg0JCf9PMcBzUWzreZ7nN5WeO3BKSpgHD9sA2q_4hDl_Vzj1EM4ocor3_b85NXSIrnzIStEVdKCxnc5CmF714xjjvxR0XHhS8BD_A'
           showSaveIcon
           play = {true}
           uri = {trackUri ? [trackUri] : []}
        />
    )
} 
export default Player;
