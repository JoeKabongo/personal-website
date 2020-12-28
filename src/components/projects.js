import React from 'react';
import { data } from './projectData';

function Projects() {
  return (
    <section className="page-container">
      <h1> PROJECTS</h1>
      <div style={{ marginBottom: '20px' }}>
        {data.map((project) => {
          return (
            <div
              style={{
                width: '100%',
                marginBottom: '30px',
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                // border: '1px solid #eb',

                borderRadius: '20px',
                display: 'block',
                paddingBottom: '20px',
                background: '#fff',
              }}
            >
              <img
                alt={project.title}
                src={project.image}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '20px 20px 0px 0px',
                }}
              />
              <div style={{ textAlign: 'center' }}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>

              <div style={{ padding: '10px' }}>
                <ul>
                  {project.talks.map((task) => {
                    return <li>{task}</li>;
                  })}
                </ul>
              </div>
              <div className="project-link-container">
                <a
                  href="http://the-nba-talk-frontend.s3-website-us-east-1.amazonaws.com/"
                  target="_blank"
                >
                  Github
                </a>

                <a
                  href="http://the-nba-talk-frontend.s3-website-us-east-1.amazonaws.com/"
                  target="_blank"
                >
                  View App
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
