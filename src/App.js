import React from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Components/Navbar";
import { Container } from 'reactstrap';
import About from './components/Pages/AboutMe';
import Projects from './components/Pages/Projects';
import Contact from './components/Pages/Contact';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
// /import Footer from "./components/Footer";

library.add(faEnvelope, faCodeBranch);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Container>
    </div>
  );
}

export default App;