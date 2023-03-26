import './Profile.css';
import bull_logo_black from '../files/bull_logo_black.png';
import {React, useState, useEffect } from 'react';
import { EditProfile } from '../EditProfile/EditProfile';

export const Profile = () => {

  const [data, setData] = useState({});


  useEffect(() => {
    fetch(`http://localhost:5000/Users/email?email=${localStorage.getItem("email").replace("@","%40")}`).then(response => {
        return response.json()
      }).then(jsonResponse => {
        if(!jsonResponse) {
          return [];
      }
      else
        setData(jsonResponse);
      
    })
  }, []);

  const handleLoad = () => {
    fetch(`http://localhost:5000/Users/email?email=${localStorage.getItem("email").replace("@","%40")}`).then(response => {
        return response.json()
      }).then(jsonResponse => {
        if(!jsonResponse) {
          return [];
      }
      else
        setData(jsonResponse);
      
    })
  }

  window.addEventListener('onClick', handleLoad);


  return (
      <div className='columns'>
        <div className='row1'>
          
          <div className='item profile-image'>
            <img src={bull_logo_black} alt='profile'/>
          </div>

          <div className='item profile-name'>
            <h2>{data.username}</h2>
          </div>

          <div className='item profile-contact'>
            <h2>Contacts:<br/>Email: {data.email}<br/>Phone: {data.phone}<br/>GitHub: {data.gitHub}<br/>Discord: <br/>Linkedin: {data.linkedIn}</h2>
          </div>
        </div>
        <div className='row2'>
          <div className='item profile-description'>
            <h2>{data.bio}</h2>
          </div>
          <div className='skills profile-skills'>
            <button>JavaScript</button>
            <button>HTML</button>
            <button>CSS</button>
            <button>React</button>
          </div>
          
          <div className='item profile-experience'>
            <h2>{data.experience}</h2>
          </div>
        </div>
        <div className='new-project'>
            <EditProfile data={data}/>
        </div>    
      </div>
  );
}

