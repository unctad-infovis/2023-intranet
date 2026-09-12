import React from 'react';
import '../styles/styles.less';

// Load helpers.
import Nav from './components/Nav.jsx';
import Row1 from './components/Row1.jsx';
import Row2 from './components/Row2.jsx';
import Row3 from './components/Row3.jsx';
import Footer from './components/Footer.jsx';

// Import Bootstrap's precompiled CSS, not the SCSS source - this project
// has zero Bootstrap variable/theme customization (confirmed: no other
// .scss file exists anywhere in src/, nothing overrides a Bootstrap
// variable before this import), so compiling Bootstrap's own SCSS through
// sass-loader bought nothing but ~300 Dart Sass deprecation warnings from
// Bootstrap 5.x's still-legacy `@import`/global-function syntax (fixed
// 2026-09-12) - the precompiled CSS is functionally identical here and
// skips Sass compilation for Bootstrap entirely.
import 'bootstrap/dist/css/bootstrap.min.css';

// Import all of Bootstrap's JS
// eslint-disable-next-line
import * as bootstrap from 'bootstrap';

function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <Row1 />
        <Row2 />
        <Row3 />
      </div>
      <Footer />
    </div>
  );
}

export default App;
