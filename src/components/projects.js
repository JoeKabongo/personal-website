import React, { useEffect, useState } from 'react';
import sanityClient from '../client';
import ClipLoader from 'react-spinners/ClipLoader';

export default function Projects() {
  document.title = 'Projects | Jonathan Tshimpaka';
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
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
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  if (isLoading) {
    return (
      <div style={{ marginTop: '200px', textAlign: 'center' }}>
        <ClipLoader size={150} color={'#123abc'} loading={true} />
      </div>
    );
  }
  return (
    <section className="page-container">
      <h1> PROJECTS</h1>
      {projects.map((project) => {
        return (
          <div className="project-card">
            <img alt={project.title} src={project.mainImage.asset.url} />
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
    </section>
  );
}
