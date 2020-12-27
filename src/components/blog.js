import React from 'react';
import { data } from './projectData';

function Blog() {
  return (
    <section className="page-container">
      <h1> Projects</h1>
      <div
        style={
          {
            // display: 'flex',
            // justifyContent: 'space-around',
            // flexWrap: 'wrap',
            // alignContent: 'flex-start',
            // alignItems: 'center',
          }
        }
      >
        {data.map((project) => {
          return (
            <div
              style={{
                width: '100%',
                marginTop: '20px',
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                display: 'block',
              }}
            >
              <img
                alt={project.title}
                src={project.image}
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                }}
              />

              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Blog;
