import React, { useEffect, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap/gsap-core';

import '../../Styles/main.css';
import { Link } from 'react-router-dom';

const Project = ({ projectObj, index }) => {

 

  useEffect(() => {
    if (projectObj === null) {
      return;
    } else {
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
  
      const projectTitle = document.querySelector('.project__titel');
      if (projectTitle) {
        projectTitle.addEventListener('mouseover', () => {
          console.log("jksdhfj dhfkxdh flkjdhx kfjhdxkfjhdj");
          hoverTimeLineOver.play();
        });
        projectTitle.addEventListener('mouseleave', () => {
          hoverTimeLineLeave.play();
        });
      }
    }
  }, []);



  const divStyle = {
    backgroundImage: `url(${projectObj.mainPicture})`,
    width: '100%',
    height: '400px',
    backgroundSize: 'cover',
    zIndex: '0'
  }; 
  

  if (!projectObj.mainPicture) {
    // Wacht totdat de achtergrondafbeeldings-URL is opgehaald
    return null;
  }

  return (
    <Link to={`/projectDetail/${projectObj.id}`} style={divStyle} className='projecten__project' key={projectObj.id}>
      <div>
        
        <h4 className='project__vak'>{projectObj.vak}</h4>
        <div className='project__titel'>
          <p>{projectObj.titel}</p>
        </div>
      </div>

     
    </Link>
  );
};

export default Project;