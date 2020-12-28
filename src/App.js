import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './components/about';
import Article from './components/article';
import Blog from './components/blog';
import Home from './components/home';
import Projects from './components/projects';
import SingleProject from './components/single-project';
function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/projects/:id">
          <SingleProject />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route path="/blog/:id">
          <Article />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
