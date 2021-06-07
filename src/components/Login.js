  
import React from "react";
import { Credentials } from '../Credentials';

const ClientId = '88b60ebba401469fa9d23d0bca62000f';
const ClientSecret ='e246f62c3041466aa2aa19a0e71e3caf';
const Scope = 'streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';
const AuthorizeUri = 'https://accounts.spotify.com/authorize';
const RedirectUri = 'http://localhost:3000/';
const ResponceType = 'token';
//&response_type=token
//&response_type=code
const AUTH_URL = `${AuthorizeUri}?client_id=${ClientId}&redirect_uri=${RedirectUri}&scope=${Scope}&response_type=${ResponceType}&show_dialog=true`;

const Login = () => {
    
  return (
    <div className="login-cont">
       
      <a className="login-btn" href={AUTH_URL}>
        Login With Spotify
      </a>
    </div>
  )
}
export default Login;