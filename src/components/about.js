import React from 'react';
import image from '../jonathanT.JPG';

function About() {
  document.title = 'About Me | Jonathan Tshimpaka';
  return (
    <article className="page-container" id="about-page">
      <h1> ABOUT</h1>

      <section id="intro">
        <h2> Intro</h2>
        <p>
          I am Jonathan Tshimpaka; a Software Engineer studying at San Jose
          State. Thanks for visiting my site. I can't wait to work with you!
        </p>
        <img src={image} alt="jonathan" style={{ width: '100%' }} />
      </section>

      <section id="skills">
        <h2> Skills</h2>
        <p>
          I love building full-stack website. Outside of web development, I have
          also had some experience with IOS development and Data engineering.
          Here is some technologies I have used.
        </p>
        <ul>
          <li> Python</li>
          <li> Django </li>
          <li> Flask</li>
          <li> HTML</li>
          <li> CSS</li>
          <li> Javascript</li>
          <li>Node.js</li>
          <li> Express.js</li>
          <li> React.js</li>
          <li> Angular</li>
          <li> AWS(EC2, RDS, S3)</li>
          <li> Java</li>
          <li> Swift</li>
          <li> SQL</li>
          <li> Tableau</li>
        </ul>
        <p>
          Check out my
          <a
            href="https://github.com/JoeKabongo"
            style={{ margin: '10px', color: '#36D7B7', fontWeight: 'bold' }}
            target="_blank"
          >
            GitHub
          </a>
          to see my code
        </p>
      </section>

      <section>
        <h2> Contact</h2>
        <p>
          You can email me at
          <a
            href="mailto:jonathankabongo23@gmail.com"
            style={{ margin: '10px', color: '#36D7B7', fontWeight: 'bold' }}
          >
            jonathankabongo23@gmail.com
          </a>
        </p>
        <p>
          Connect with me on
          <a
            href="https://www.linkedin.com/in/jonathan-tshimpaka/"
            target="_blank"
            style={{ margin: '10px', color: '#36D7B7', fontWeight: 'bold' }}
          >
            LinkedIn
          </a>
        </p>
      </section>
    </article>
  );
}

export default About;
