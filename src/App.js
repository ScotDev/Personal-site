import React from 'react';
import './styles.min.css';

import Navbar from './components/layout/Navbar';
import Showcase from './components/layout/Showcase';
import Portfolio from './components/layout/Portfolio';
import Contact from './components/layout/Contact';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar></Navbar>
        <div className="content">
          <Showcase></Showcase>
          <div id="portfolio" className="section-heading">Projects</div>
          <Portfolio></Portfolio>
          <div id="contact" className="section-heading">Contact</div>
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
}

export default App;
