import React from 'react';
import './styles.min.css';

import Navbar from './components/layout/Navbar';
import Showcase from './components/layout/Showcase';
import Portfolio from './components/layout/Portfolio';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar></Navbar>
        <div className="content">
          <Showcase></Showcase>
          <div className="section-heading">Projects</div>
          <Portfolio></Portfolio>
        </div>
      </div>
    </div>
  );
}

export default App;
