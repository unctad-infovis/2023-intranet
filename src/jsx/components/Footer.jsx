import React, { /* useState, useEffect, useRef */ } from 'react';

function App() {
  return (
    <div className="container text-center p-3">

      <div className="row align-items-start">
        <h4 className="text-start">UNCTAD Locations</h4>
        <div className="col">
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
        <div className="col">
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
        <div className="col">
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
        <div className="col">
          <div className="digital-clock px-3 border-0">
            <div className="location fw-light">Please send us your feedback or suggestions for improvement to: </div>
            <div className="date">
              <a href="mailto:internal.comms@unctad.org">internal.comms@unctad.org</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
