import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProjectDetail = () => {
  console.log("eee");
  const { id } = useParams();

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
        console.log(data.projecten[id]);
        setProject(data.projecten[id]);
      });
  }
  , []);

  if (!project) {
    return null;
  }

  return (
    <>
      <Link to={"/"}>Terug</Link>
      <div>
        <h1>{project.titel}</h1>
        <h2>{project.vak}</h2>
        <p>
          {project.beschrijving}
        </p>
      </div>
    </>
  );
};

export default ProjectDetail;