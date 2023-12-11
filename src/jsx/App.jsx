import React, { /* useState, */useEffect } from 'react';
import '../styles/styles.less';

// Load helpers.
// import formatNr from './helpers/FormatNr.js';
// import roundNr from './helpers/RoundNr.js';

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
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container text-center">
        <div className="row">
          <div className="col col-8">
            Video
            Video
          </div>
          <div className="col col-4">
            <div className="row">
              <div className="col">
                Quicklick
              </div>
              <div className="col">
                Quicklick
              </div>
              <div className="col">
                Quicklick
              </div>
              <div className="col">
                Quicklick
              </div>
            </div>
            <div className="row">
              <div className="col">
                Quicklick
              </div>
              <div className="col">
                Quicklick
              </div>
              <div className="col">
                Quicklick
              </div>
              <div className="col">
                Quicklick
              </div>
            </div>
            <div className="row">
              <div className="col">
                Quicklick
              </div>
              <div className="col">
                Quicklick
              </div>
              <div className="col">
                Quicklick
              </div>
              <div className="col">
                Quicklick
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            News
          </div>
          <div className="col">
            Calendar
          </div>
          <div className="col">
            UNCTAD60
          </div>
        </div>
        <div className="row">
          <div className="col">
            Staff board
          </div>
          <div className="col">
            <div className="">
              <div>
                Meet
                <span>Rafe</span>
              </div>
              <div className="p-2">
                <video controls>
                  <track default kind="captions" srcLang="en" src="" />
                  <source src="https://storage.unctad.org/intranet/Rafe%20Dent.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="row">
              <div className="">
                <a className="" href="/sites/UNCTAD_Intranet/SitePages/AllStaffProfile.aspx">
                  SEE ALL &nbsp;
                  <img className="" src="" alt="See All" />
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            New comer
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
