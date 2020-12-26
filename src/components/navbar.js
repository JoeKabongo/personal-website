import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>

        <li>
          <Link to="/blog" className="link">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/projects" className="link">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
