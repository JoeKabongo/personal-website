import React, { useEffect, useState } from 'react';
import { data } from './projectData';
import sanityClient from '../client';
function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"] {
                title, 
                mainImage{
                  asset->{
                      _id,
                      url
                  },
                  alt
              },
              description,
              github,
              link,
              actions
              
                
            }`
      )
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <section className="page-container">
      <h1> PROJECTS</h1>
      <div style={{ marginBottom: '20px' }}>
        {projects.map((project) => {
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
                src={project.mainImage.asset.url}
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
                  {project.actions.map((task) => {
                    return <li>{task}</li>;
                  })}
                </ul>
              </div>
              <div className="project-link-container">
                <a href={project.github} target="_blank">
                  Github
                </a>
                {project.link && (
                  <a href={project.link} target="_blank">
                    View App
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
