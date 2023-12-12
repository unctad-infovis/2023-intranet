import React, { /* useState, useEffect, useRef */ } from 'react';

function App() {
  return (
    <div>
      <nav className="top-navbar navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="data:image/png;base64,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"
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
        src="https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/_api/siteiconmanager/getsitelogo?target=2&hash=638360922760665617"
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
