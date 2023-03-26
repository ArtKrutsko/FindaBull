import './NewProject.css';
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


export const NewProject = () => {
    const [option, setOption] = useState([]);


    const openWindow = () => {
        document.getElementById('newProjectBtn').style.display = "none";
        document.getElementById('newProjectWindow').style.display = "block";
        document.getElementById('closeBtn').style.display = "block";
    }

    const closeWindow = () => {
        document.getElementById('newProjectBtn').style.display = "block";
        document.getElementById('newProjectWindow').style.display = "none";
        document.getElementById('closeBtn').style.display = "none";
    }

    const handleOptions = (options) => {
        // document.getElementById('skills').value = options;
        // console.log(document.getElementById('skills').value);
        console.log(document.getElementById('Skills').value);
        setOption(() => {
            return [options];
        })
    }

    function handleSubmit (event) {  
        
        let form = event.target;
        fetch('http://localhost:5000/Projects', {
          method: 'POST',
          headers: {"Content-Type":'application/json'},
          body: JSON.stringify({id:0, name:form.name.value,description: form.description.value,users:[{}],skills:[{}]}),
        })
      }

    return (
        <div>
            <div className='newProjectBtn' id='newProjectBtn'>
               <button className="new-button" onClick={openWindow}>Add your Project</button>
            </div>
            <div className='closeBtn' id='closeBtn'>
               <button className="new-button" onClick={closeWindow}>Close window</button>
            </div>
            <div className='newProjectWindow' id='newProjectWindow'>
                <div className='window-header'>
                    <h2>Add your project so others can see it!</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='name-textarea'>
                        <label hlmlfor="name">How do you want to name your project?</label>
                        <textarea id='name' placeholder="Name of your project" name="name" 
                                    required rows = {1} cols ={45} maxLength={25}></textarea>
                    </div>
                    <div className='description-textarea'>
                        <label hlmlfor="description">What is your project about and who are you looking for?</label>
                        <textarea id='description' placeholder="Brifly describe your goals and what you look for from an applicant" name="description" 
                                    required rows = {6} cols ={55} maxLength={400}></textarea>
                    </div>
                    <div className='select-container'>
                        <Select options={all_options} onChange={handleOptions} value={option.label} isMulti maxMenuHeight={150} name='skills' id='Skills'/>
                            
                    </div>
                    <select multiple={true} value={option} style={{display: 'none'}}/>
                    <div className='submit-button-container'>
                        <button type='submit' className="submit-button">Submit your project</button> 
                    </div>
                </form>
            </div> 
        </div>
    )
}