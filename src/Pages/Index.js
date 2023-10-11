import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import ProjectDetail from './ProjectDetail';

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projectDetail/:id" element={<ProjectDetail />} />
    </Routes>
  );
};

export default Pages;