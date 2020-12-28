import React from 'react';

function About() {
  return (
    <div className="page-container">
      <h1> About</h1>

      <section>
        <h1> Contact</h1>
        <p>
          You can email me at
          <a href="mailto:jonathankabongo23@gmail.com">
            jonathankabongo23@gmail.com
          </a>
        </p>
        <p>
          Connect with me on{' '}
          <a
            href="https://www.linkedin.com/in/jonathan-tshimpaka/"
            target="_blank"
          >
            linkedIn
          </a>
        </p>
      </section>
    </div>
  );
}

export default About;
