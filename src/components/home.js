import React from 'react';
import image from '../jonathanT.JPG';
import { SocialIcon } from 'react-social-icons';
import { data } from './projectData';

function Home() {
  return (
    <div className="page-container">
      <section
        style={{
          borderRadius: '10px',
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
          textAlign: 'center',
          padding: '50px',
          backgroundColor: 'white',
          display: 'block',
        }}
        id="homepage-section"
      >
        <img src={image} style={{ width: '25%' }} alt="jonathan" />
        <p>
          Hello! My name is Jonathan Tshimpaka. I am a software engineer;
          currently studing computer science at San Jose State University.
          <br></br>
          Thank you for visiting my website, I hope you enjoy it!
        </p>
        {/* <Link to="/about"> About Me</Link> */}

        <SocialIcon
          url="https://www.linkedin.com/in/jonathan-tshimpaka/"
          style={{ height: 35, width: 35 }}
          target="_blank"
        />
        <SocialIcon
          url="https://github.com/JoeKabongo"
          target="_blank"
          style={{ height: 35, width: 35 }}
        />
      </section>
    </div>
  );
}

export default Home;
