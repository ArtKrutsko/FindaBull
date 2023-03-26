import './Home.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {ProjectTile} from '../ProjectTile/ProjectTile';
import {NewProject} from '../NewProject/NewProject';
import {React, useState, useEffect} from 'react';

export const Home = () => {
  const [projects, setProjects] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:5000/Projects",{
      method: "GET",
      mode: "cors"
    }).then(response => {
      return response.json()
    }).then(jsonResponse => {
      if(!jsonResponse) {
        return [];
      }
      setProjects(jsonResponse);
    })
    }, [])
  
  
  return (
    <div className="body">

      <div className="content">
        <SearchBar />
        <div className="projects">
            {projects.map((item) => {
              return (
                <div class = "item">
                  <ProjectTile project={item}/>
                </div>
              )
            })}
          
          {/* <div className = "item">
            <ProjectTile/>
          </div> 
          <div className = "item">
            <ProjectTile/>
          </div> 
          <div className = "item">
            <ProjectTile/>
          </div> 
           */}
        </div>
      </div>
      <div className='new-project'>
            <NewProject />
      </div>
    </div>
  );
}

