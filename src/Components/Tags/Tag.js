import React from 'react';
import './tag.css';

const Tag = ({tagName}) => {
  return (
    <div className='tag'>
      <p>{tagName}</p>
    </div>
  );
};

export default Tag;