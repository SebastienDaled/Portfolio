import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap/gsap-core';

import '../../Styles/main.css';

const Project = ({ key, index }) => {

  const [project, setProject] = useState();
  const [BackgroundImg, setBackgroundImg] = useState();

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => {
        setProject(data.projecten[index])
        setBackgroundImg(data.projecten[index].mainPicture)
      });
    
   
    }
  , []);
  
  // console.log(project);

  useEffect(() => {
    const hoverTimeLineOver = gsap.timeline({ paused: true }).to('.project__titel', {
      duration: 1,
      opacity: 0,
      delay: 1
    });

    const hoverTimeLineLeave = gsap.timeline({ paused: true }).to('.project__titel', {
      duration: 1,
      opacity: 1,
      delay: 1
    });

    // Use requestAnimationFrame to ensure the DOM is ready
    requestAnimationFrame(() => {
      const projectTitle = document.querySelector('.project__titel');
      if (projectTitle) {
        projectTitle.addEventListener('mouseover', () => {
          hoverTimeLineOver.play();
        });
        projectTitle.addEventListener('mouseleave', () => {
          hoverTimeLineLeave.play();
        });
      }
    });
  }, []);



  const divStyle = {
    backgroundImage: `url(${BackgroundImg})`,
    width: '100%',
    height: '400px',
    backgroundSize: 'cover'
  }; 
  



  if (!BackgroundImg) {
    // Wacht totdat de achtergrondafbeeldings-URL is opgehaald
    return null;
  }

  return (
    <div style={divStyle} className='projecten__project'>
      <div>
        
        <h4 className='project__vak'>{project.vak}</h4>
        <div className='project__titel'>
          <p>{project.titel}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;