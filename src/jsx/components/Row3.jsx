import React, { /* useState, useEffect, useRef */ } from 'react';

function App() {
  return (
    <div className="row">
      <div className="col staff_board_container">
        <div className="bg p-3 box">
          <div className="row mb-3">
            <div className="col"><h3>Staff board</h3></div>
          </div>
          <div className="row board box pt-3 ms-1 me-1 mt-1 mb-2">
            <div className="col">
              <div className="row mb-3">
                <div className="col col-1 icon">
                  <img src="./assets/img/circles_blue.jpg" alt="" />
                </div>
                <div className="col ms-2">
                  <a href="https://unitednations.sharepoint.com/Sites/UNCTAD_Intranet/SitePages/CalendarItem.aspx?ItemId=3748">
                    <div className="row">
                      <div className="col date">12 December 2023</div>
                    </div>
                    <div className="row">
                      <div className="col calendar_title">Found a ring on the 7th floor</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col col-1 icon">
                  <img src="./assets/img/circles_yellow.jpg" alt="" />
                </div>
                <div className="col ms-2">
                  <a href="https://unitednations.sharepoint.com/Sites/UNCTAD_Intranet/SitePages/CalendarItem.aspx?ItemId=3748">
                    <div className="row">
                      <div className="col date">12 December 2023</div>
                    </div>
                    <div className="row">
                      <div className="col calendar_title">I have a better car to sell, only used it for 2 years, 3 more year…</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col col-1 icon">
                  <img src="./assets/img/circles_blue.jpg" alt="" />
                </div>
                <div className="col ms-2">
                  <a href="https://unitednations.sharepoint.com/Sites/UNCTAD_Intranet/SitePages/CalendarItem.aspx?ItemId=3748">
                    <div className="row">
                      <div className="col date">11 December 2023</div>
                    </div>
                    <div className="row">
                      <div className="col calendar_title">Want to sell my car, less than 20000 milage call to be book an…</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col more_link_container">
              <a href="See more">See more</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col meet_staff_container">
        <div className="bg p-3 box">
          <div className="row">
            <div className="col">
              <h3>
                Meet
                {' '}
                <span>Rafe</span>
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <video controls>
                <track default kind="captions" srcLang="en" src="" />
                <source src="https://storage.unctad.org/intranet/Rafe%20Dent.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="row">
            <div className="col more_link_container">
              <a href="See more">See more</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col new_comer_container">
        <div className="bg p-3 box">
          <div className="row">
            <div className="col">
              <h3>Newcomer info</h3>
            </div>
          </div>
          <div className="row board box pt-3 ms-1 me-1 mt-1 mb-2 text_container">
            <div className="col">
              <p>Congratulations on joining the UNCTAD team!</p>
              <p>Whether you&apos;re a recent addition or part of our stellar welcoming committee, we&apos;re thrilled to have you on board. Explore our &ldquo;New Employee Onboarding&rdquo; page, your go-to hub for all things onboarding.</p>
              <p>Click on see more to find most if not all relevant information.</p>
            </div>
          </div>
          <div className="row">
            <div className="col more_link_container">
              <a href="See more">See more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
