import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Dashboard from './components/Dashboard';
import Gallery from './components/Gallery';
import { getAccessToken } from './utils/functions';


const App = () => {  
  const playlists = useSelector((state) => state.playlistReducer); 

  useEffect(() =>{
    getAccessToken();
  },[]);
  useEffect(() =>{
    console.log("App>>>>playlists: ",playlists);
  },[playlists]);
  return (
    <div className="container">
      <Dashboard />
      {
        playlists && playlists.items && playlists.items.length > 0 &&
           <Gallery data={playlists.items}/>
      }
      
    </div>
  );
}

export default App;