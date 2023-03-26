import './Navigation.css';
import logomain from '../files/logo_main.bmp';
import {ProfilePicture} from '../ProfilePicture/ProfilePicture';
import {NavLink} from "react-router-dom";

export const Navigation = () => {
  return (
      <div className="nav">
        <NavLink to='/home'>
            <img className='logomain' src={logomain} alt='Logo'/>
        </NavLink>
        
        <h1>FindaBull</h1>
        <NavLink to='/profile'>
          <div className='profile'>
            <ProfilePicture />
          </div>
        </NavLink>
      </div>
  );
}

