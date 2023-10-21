import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Components/Footer/footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Tag from '../Components/Tags/Tag';

const ProjectDetail = () => {

  const { id } = useParams();
  
  gsap.registerPlugin(ScrollTrigger);

  // const [project, setProject] = useState(null);

  // useEffect(() => {
  //   fetch('Projects.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data.projecten[id]);
  //       setProject(data.projecten[id]);
  //     });
  // }
  // , []);

  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch('Projects.json')
      .then(res => res.json())
      .then(data => {
        // console.log(data.projecten[id]);
        setProject(data.projecten[id]);
      });
  }
  , [id]);


  if (!project) {
    return null;
  }

  return (
    <>
      <div className='detail'>
        <Link to={"/"}><button className='btn_back'>
                  <svg
                    id="Layer_4"
                    data-name="Layer 4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 82.61 146.43"
                    style={{ fill: 'none', stroke: '#C9C9C9', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '15px' }}
                  >
                  <polyline points="74.8 140.43 8.49 74.12 76.61 6"/>
                  </svg>
                </button></Link>
        
        <div className='detail__hero'>
          <div className='hero__content'>
              <h1>{project.titel}</h1>
              <h2>{project.vak}</h2>
              <div className='detail__names'>
                {project.names ? <span>Team: {project.names}</span> : null}
              </div>
              <div className='tags'>
                {project.tags.map((tag, index) => (
                  <Tag tagName={tag} key={index} />
                ))}
              </div>
              <p>
                {project.beschrijving}
              </p>

              <button className='btn_github'><img src='images/github.png' alt='Github logo'></img> Code</button>
          </div>
          <div className='hero__image'>
              <img src={project.mainPicture} alt='inlog pagina'></img>
          </div>
        </div>
        <div className='detail__images'>
          {project.pictures.map((foto, index) => (
            <img src={foto} alt="project foto" key={index} />
          ))
          }
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProjectDetail;