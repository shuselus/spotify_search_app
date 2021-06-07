import React, { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import SearchResult from './components/SearchResult';
import Login from './components/Login';
import { getAccessToken } from './utils/functions';
//import { getParamValues } from './utils/functions';

const App = () => {  
  //const [accessToken, setAccessToken] = useState(null);
  //const [expiryTime, setExpiryTime] = useState({})
  
  useEffect(() =>{
    getAccessToken();
  },[]);
  
  return (
    <div className="app-cont">
      <Dashboard />
      <SearchResult />
    </div>
  );
}

export default App;