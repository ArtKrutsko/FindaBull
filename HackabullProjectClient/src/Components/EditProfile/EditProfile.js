import './EditProfile.css';
import {React, useState} from 'react';
import Select from 'react-select'

const all_options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'perv', label: 'perv' },
    { value: 'vtor', label: 'vtor' },
    { value: 'three', label: 'three' },
    { value: 'four', label: 'four' },
  ]


  

export const EditProfile = (props) => {
    const [option, setOption] = useState([]);
    

    function handleSubmit (event) {  
        
        let form = event.target;
        fetch('http://localhost:5000/Users/update', {
          method: 'POST',
          headers: {"Content-Type":'application/json'},
          body: JSON.stringify({username:form.username.value,firstName: form.firstName.value,email: localStorage.getItem("email"), lastName: form.lastName.value, bio: form.bio.value, phone: form.phone.value, linkedIn: form.linkedIn.value, gitHub: form.gitHub.value, experience: form.experience.value})
        })
    }


    const openWindow = () => {
        document.getElementById('EditProfile').style.display = "none";
        document.getElementById('EditProfileWindow').style.display = "block";
        document.getElementById('closeBtn').style.display = "block";
    }

    const closeWindow = () => {
        document.getElementById('EditProfile').style.display = "block";
        document.getElementById('EditProfileWindow').style.display = "none";
        document.getElementById('closeBtn').style.display = "none";
    }

    const handleOptions = (options) => {
        setOption(() => {
            return [options];
        })
    }

    return (
        <div>
            <div className='EditProfile' id='EditProfile'>
               <button className="new-button" onClick={openWindow}>Edit Your Profile</button>
            </div>
            <div className='closeBtn' id='closeBtn'>
               <button className="new-button" onClick={closeWindow}>Close window</button>
            </div>
            <div className='EditProfileWindow' id='EditProfileWindow'>
                <div className='window-header'>
                    <h2>Keep your profile updated!</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='name-textarea short'>
                        <label hlmlfor="name">Your username</label>
                        <textarea id='name' placeholder={props.data.username} name="username" 
                                    required rows = {1} cols ={45} maxLength={25}></textarea>
                    </div>
                    <div className='description-textarea'>
                        <label hlmlfor="description">Tell us about yourself and your goals</label>
                        <textarea id='description' placeholder={props.data.bio} name="bio" 
                                    required rows = {6} cols ={55} maxLength={400}></textarea>
                    </div>
                    <div className='experience-textarea'>
                        <label hlmlfor="experience">Tell us about your experience</label>
                        <textarea id='experience' placeholder={props.data.experience} name="experience" 
                                    required rows = {6} cols ={55} maxLength={400}></textarea>
                    </div>
                    <div className='select-container'>
                        <Select options={all_options} onChange={handleOptions} value={option.label} isMulti maxMenuHeight={160}/>
                            
                    </div>
                    <div className='email-textarea short'>
                        <label hlmlfor="FirstName">Your First Name:</label>
                        <textarea id='FirstName' placeholder={props.data.firstName} name="firstName" 
                                    required rows = {1} cols ={45} maxLength={25}></textarea>
                    </div>
                    <div className='email-textarea short'>
                        <label hlmlfor="LastName">Your Last Name:</label>
                        <textarea id='LastName' placeholder={props.data.lastName} name="lastName" 
                                    required rows = {1} cols ={45} maxLength={25}></textarea>
                    </div>
                    <div className='phone-textarea short'>
                        <label hlmlfor="phone">Phone Number:</label>
                        <textarea id='phone' placeholder={props.data.phone} name="phone" 
                                    required rows = {1} cols ={45} maxLength={25}></textarea>
                    </div>
                    <div className='git-textarea short'>
                        <label hlmlfor="git">Your GitHub:</label>
                        <textarea id='git' placeholder={props.data.gitHub} name="gitHub" 
                                    required rows = {1} cols ={45} maxLength={25}></textarea>
                    </div>
                    <div className='linkedin-textarea short'>
                        <label hlmlfor="linkedin">Your LinkedIn:</label>
                        <textarea id='linkedin' placeholder={props.data.linkedIn} name="linkedIn" 
                                   required rows = {1} cols ={45} maxLength={25}></textarea>
                    </div>
                    <div className='submit-button-container'>
                        <button type='submit' className="submit-button">Submit changes</button> 
                    </div>
                </form>
            </div> 
        </div>
    )
}