import React from 'react'
//import SpotifyPlayer from 'react-spotify-web-playback';
//Required scopes: ["streaming", "user-read-email", "user-read-private"]
import SpotifyPlayer from 'react-spotify-player';



const size = {
    width: '100%',
    height: 300,
  };
  const view = 'list'; // or 'coverart'
  const theme = 'black'; // or 'white'

const Player = ({trackUri}) => {
    const access_token = JSON.parse(localStorage.getItem('params')).access_token;
    
    return (
         <SpotifyPlayer 
            token = {access_token}
            showSaveIcon
            play = {true}
            uri = {trackUri ? [trackUri] : []}
            size={size}
            view={view}
            theme={theme}
            autoplay={true}
         />
    
    )
} 
export default Player;
