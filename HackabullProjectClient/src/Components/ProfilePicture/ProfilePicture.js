import './ProfilePicture.css';
import {React} from 'react';
import bull_logo_black from '../files/bull_logo_black.png';

export const ProfilePicture = () => {
    return (
        <div className = 'profile'>
            <img src={bull_logo_black} alt='Profile'/>
        </div>
    )
}