import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from './../helpers/ProjectList';
import {BsGithub} from 'react-icons/bs';
import '../styles/ProjectDisplay.css'


function ProjectDisplay() {
    const {id} = useParams();
    const projects = ProjectList[id]
  return (
    <div className='project'>
        <h1>{projects.name}</h1>
        <img src={projects.image} />
        <p>
           <b> Skills:</b>{projects.skills}
        </p>
        <BsGithub />

    </div>
  )
}

export default ProjectDisplay