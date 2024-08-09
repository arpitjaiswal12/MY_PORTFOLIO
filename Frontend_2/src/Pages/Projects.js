import React from 'react';
import ProjectBox from '../Components/ProjectBox.js';
import BookBazaar from '../images/bookBazaar.png';
import Youtube_Twitter from '../images/Youtube_Twitter.png';
import EduNetAI from '../images/EduNetAI.png';
import Movie_app from '../images/Movie_app.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
      <ProjectBox projectPhoto={EduNetAI} projectName="EduNetAI" />
        <ProjectBox projectPhoto={Youtube_Twitter} projectName="Youtube_TwitterBackend" />
        <ProjectBox projectPhoto={BookBazaar} projectName="BookBazaar" />
        <ProjectBox projectPhoto={Movie_app} projectName="Movie_app" />
        
      </div>

    </div>
  )
}

export default Projects