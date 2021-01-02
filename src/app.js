import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './components/about';
import Article from './components/article';
import Blog from './components/blog';
import Home from './components/home';
import Projects from './components/projects';
import Footer from './components/footer';
import ErrorPage from './components/error';
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
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route path="/blog/:slug">
          <Article />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
