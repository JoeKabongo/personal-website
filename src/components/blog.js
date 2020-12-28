import React from 'react';
import { data } from './blogdata';
import { Link } from 'react-router-dom';

function Blog() {
  return (
    <section className="page-container">
      <h1> BLOG</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          alignContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        {data.map((project) => {
          return (
            <Link
              to={`/blog/${project.id}`}
              style={
                {
                  // width: '500px',
                  // marginTop: '20px',
                  // boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                  // display: 'block',
                }
              }
              className="blog-card"
            >
              <img
                alt={project.title}
                src={project.image}
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderBottom: '3px solid #36D7B7',
                }}
              />

              <h2 style={{ padding: '10px' }}>{project.title}</h2>
              <p style={{ padding: '10px' }}>{project.description}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
export default Blog;
