import React, { /* useState, useEffect, useRef */ } from 'react';

function App() {
  return (
    <div>
      <nav className="top-navbar navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="assets/img/un-logo.png"
              alt="UN Logo"
              style={{ maxWidth: '200px', maxHeight: '48px' }}
            />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">SharePoint</a>
              </li>
            </ul>
            <form className="d-flex m-auto" role="search">
              <input className="form-control me-2" type="search" placeholder="Search this site" aria-label="Search" />
            </form>
          </div>
        </div>
      </nav>
      <img
        src="assets/img/getsitelogo.jpeg"
        alt="UN Logo"
        style={{ width: '100%', maxWidth: '100%' }}
      />
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Organization
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/OSG.aspx">Office of the Secretary General (OSG)</a></li>
                  <li><a className="dropdown-item" href="https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/DGDS.aspx">Division on Globalization and Development Strategies (DGSG)</a></li>
                  <li><a className="dropdown-item" href="https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/DIAE.aspx">Division on Investment and Enterprise (DIAE)</a></li>
                  <li><a className="dropdown-item" href="https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/DITC.aspx">Division on International Trade and Commodities (DITC)</a></li>
                  <li><a className="dropdown-item" href="https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/DTL.aspx">Division on Technology and Logistics (DTL)</a></li>
                  <li><a className="dropdown-item" href="https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/ALDC.aspx">Division for Africa, Least Developed Countries and Special Programmes (ALDC)</a></li>
                  <li><a className="dropdown-item" href="https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/STAT.aspx">Statistics Service (STAT)</a></li>
                  <li><a className="dropdown-item" href="https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/PSMS.aspx">Programme Support and Management Service (PSMS)</a></li>
                  <li><a className="dropdown-item" href="https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/IOSS.aspx">Intergovernmental Outreach and Support Service (IOSS)</a></li>
                  <li><a className="dropdown-item" href="https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/NewYork.aspx">UNCTAD New York Office</a></li>
                  <li><a className="dropdown-item" href="https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/AddisAbaba.aspx">UNCTAD Addis Ababa Office</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Events
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Book a conference room</a></li>
                  <li><a className="dropdown-item" href="#">Organize a meeting</a></li>
                  <li><a className="dropdown-item" href="#">Event calendar </a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Publications
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Document Processing</a></li>
                  <li><a className="dropdown-item" href="#">Editing</a></li>
                  <li><a className="dropdown-item" href="#">Graphic Design</a></li>
                  <li><a className="dropdown-item" href="#">Publications Committee </a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  IT
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Helpdesk</a></li>
                  <li><a className="dropdown-item" href="#">IT Open Door</a></li>
                  <li><a className="dropdown-item" href="#">IT Steering Committee</a></li>

                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Human Resources
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Recruitment</a></li>
                  <li><a className="dropdown-item" href="#">Learning</a></li>
                  <li><a className="dropdown-item" href="#">Staff Movements</a></li>
                  <li><a className="dropdown-item" href="#">Travel Administration of Staff and Other Contracts</a></li>
                  <li><a className="dropdown-item" href="#">Internship Program</a></li>
                  <li><a className="dropdown-item" href="#">Mentoring Programme</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Communications
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Branding Guidelines</a></li>
                  <li><a className="dropdown-item" href="#">Templates</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Task Forces
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/UNCTAD-Internal-Advocacy-Working-Group-Addressing-Discrimination-and-Harassment-in-the-Workplace.aspx">Addressing Discrimination and Harassment in the Workplace</a></li>
                  <li><a className="dropdown-item" href="#">Crossing the Line Initiative</a></li>
                  <li><a className="dropdown-item" href="#">Disability Inclusion</a></li>
                  <li><a className="dropdown-item" href="#">Research Seminar Series</a></li>
                  <li><a className="dropdown-item" href="https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/Statistics-Coordination-Committee.aspx">Statistics Coordination Committee</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
