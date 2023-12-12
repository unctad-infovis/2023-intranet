import React, { /* useState, useEffect, useRef */ } from 'react';

function App() {
  return (
    <div className="row mb-1 mt-1">
      <div className="col p-2 news_container box">
        <div className="bg p-3 box">
          <div className="row mb-3">
            <div className="col"><h3>SG activities</h3></div>
          </div>
          <div className="row mb-3">
            <div className="col-5">
              <a href="https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/SGActivityItem.aspx?ItemId=4">
                <div className="image_container"><img src="./assets/img/news_image_1.jpg" alt="" /></div>
              </a>
            </div>
            <div className="col-7">
              <a href="https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/SGActivityItem.aspx?ItemId=4">
                <div className="row"><div className="col date">13 December 2023</div></div>
                <div className="row"><div className="col news_title">Townhall meeting!</div></div>
              </a>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-5">
              <a href="https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/SGActivityItem.aspx?ItemId=4">
                <div className="image_container"><img src="./assets/img/news_image_2.jpg" alt="" /></div>
              </a>
            </div>
            <div className="col-7">
              <a href="https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/SGActivityItem.aspx?ItemId=4">
                <div className="row"><div className="col date">12 December 2023</div></div>
                <div className="row"><div className="col news_title">UNCTAD Women Network Picnic and Reconnecting</div></div>
              </a>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-5">
              <a href="https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/SGActivityItem.aspx?ItemId=4">
                <div className="image_container"><img src="./assets/img/news_image_2.jpg" alt="" /></div>
              </a>
            </div>
            <div className="col-7">
              <a href="https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/SGActivityItem.aspx?ItemId=4">
                <div className="row"><div className="col date">12 December 2023</div></div>
                <div className="row"><div className="col news_title">El Pais interview with our SG El Pais interview</div></div>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col more_link_container">
              <a href="See more">See more</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col p-2 calendar_container">
        <div className="bg p-3 box">
          <div className="row mb-3">
            <div className="col"><h3>Tuesday 12 December</h3></div>
          </div>
          <div className="row mb-3">
            <div className="col calendar_button_container">
              <button type="button" className="button_today">Today</button>
              <button type="button" className="button_calendar">Calendar</button>
              <button type="button" className="button_un_calendar">UN calendar</button>
            </div>
          </div>
          <div className="row calendar box pt-3 ms-1 me-1 mt-1 mb-2">
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
                      <div className="col calendar_title">European Commission-UNCTAD workshop: Unlocking the full…</div>
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
                      <div className="col calendar_title">UNCTAD – UN DESA Briefing for least developed countries…</div>
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
                      <div className="col calendar_title">Asian BRI Partners Regional Meeting - Green Development…</div>
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
      <div className="col p-2 unctad60_container box">
        <div className="bg p-3 box">
          <div className="container">
            <a href="https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/UNCTAD60.aspx">
              <img src="./assets/img/unctad60_image.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
