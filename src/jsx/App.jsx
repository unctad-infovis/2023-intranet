import React, { /* useState, */useEffect } from 'react';
import '../styles/styles.less';

// Load helpers.
// import formatNr from './helpers/FormatNr.js';
// import roundNr from './helpers/RoundNr.js';
import Nav from './components/Nav.jsx';
import Row1 from './components/Row1.jsx';
import Row2 from './components/Row2.jsx';
import Row3 from './components/Row3.jsx';

// Import all of Bootstrap's CSS
import 'bootstrap/scss/bootstrap.scss';

// Import all of Bootstrap's JS
// eslint-disable-next-line
import * as bootstrap from 'bootstrap';

function App() {
  // Data states.

  useEffect(() => {

  }, []);

  return (
    <div>
      <Nav />

      <div className="container">
        <Row1 />
        <Row2 />
        <Row3 />
      </div>
    </div>
  );
}

export default App;
