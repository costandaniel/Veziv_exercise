import React, { useEffect } from 'react';
import './Home.scss'
import { ProjectLists } from '.';
import { useState } from 'react'
import {nanoid} from 'nanoid'
import {HiDocumentAdd} from 'react-icons/hi'
import {Link} from 'react-router-dom'
import axios from 'axios'
function Home() {
  const [projects,setProjects] = useState([]);
 useEffect(()=> {
  const fetchProjects = async () => {
    const response = await axios.get('http://localhost:5000/projects');
    setProjects(response.data);
  }
  fetchProjects();
})

  return (
    <div className="home">
      <div className='header'>
      <h2>This are the projects:</h2>
      <Link to={'/form'}>
      <span className='add__icon__span' > <HiDocumentAdd className='add__icon' /></span>
      </Link>
      </div>
       <ProjectLists projects={projects}/>

    </div>
  );
}

export default Home;
