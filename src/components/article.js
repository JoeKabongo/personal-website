import React from 'react';
import { useParams } from 'react-router-dom';

function Article() {
  const { id } = useParams();

  return (
    <div className="page-container">
      <h1> Article {id}</h1>
    </div>
  );
}

export default Article;
