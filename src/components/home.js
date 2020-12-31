import React from 'react';
import image from '../jonathanT.JPG';
import { SocialIcon } from 'react-social-icons';

export default function Home() {
  document.title = 'Jonathan Tshimpaka';

  return (
    <section className="page-container">
      <h1> Away</h1>

      <div id="homepage-section-container">
        <img src={image} alt="jonathan" />
        <h3> Hello, I am Jonathan!</h3>
        <p>
          I am a software engineer; currently studing computer science at San
          Jose State University. This is my personal website, you will find my
          personal projects, blog articles I've written , and learn a little bit
          about me.
          <br></br>I hope you enjoy it!
        </p>

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
      </div>
    </section>
  );
}
