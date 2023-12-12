import React, { /* useState, useEffect, useRef */ } from 'react';

function App() {
  return (
    <div className="footer_container">
      <div className="container">
        <div className="row mt-1 mb-1">
          <h4 className="text-start p-2">UNCTAD Locations</h4>
          <div className="col p-2">
            <div className="digital-clock px-3 pb-1 pt-2">
              <div className="location fw-light">Geneva, Switzerland</div>
              <div className="date">
                <div className="time">
                  3:08
                  <sup className="ampm">PM</sup>
                </div>
                <div className="details_container ms-5">
                  <div className="details fw-bold" />
                  <div className="details fw-light">12/12/2023</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col p-2">
            <div className="digital-clock px-3 pb-1 pt-2">
              <div className="location fw-light">New York, NY</div>
              <div className="date">
                <div className="time">
                  8:23
                  <sup className="ampm">AM</sup>
                </div>
                <div className="details_container ms-5">
                  <div className="details fw-bold">6h behind</div>
                  <div className="details fw-light">12/12/2023</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col p-2">
            <div className="digital-clock px-3 pb-1 pt-2">
              <div className="location fw-light">Addis Ababa, Ethiopia</div>
              <div className="date">
                <div className="time">
                  5:09
                  <sup className="ampm">PM</sup>
                </div>
                <div className="details_container ms-5">
                  <div className="details fw-bold">6h ahead</div>
                  <div className="details fw-light">12/12/2023</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col p-2">
            <div className="digital-clock px-3 border-0">
              <div className="location fw-light">Please send us your feedback or suggestions for improvement to: </div>
              <div className="date">
                <a href="mailto:internal.comms@unctad.org">internal.comms@unctad.org</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid footer_shortcuts_container">
        <div className="footer_toolbar">Shortcuts</div>
      </div>
    </div>

  );
}

export default App;
