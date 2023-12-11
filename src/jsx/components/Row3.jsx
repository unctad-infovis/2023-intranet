import React, { /* useState, useEffect, useRef */ } from 'react';

function App() {
  return (
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
  );
}

export default App;
