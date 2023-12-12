import React, { /* useState, useEffect, useRef */ } from 'react';

function App() {
  return (
    <div className="row mt-5 mb-5">
      <div className="col p-3 news_container">
        <div className="row mb-3">
          <div className="column"><h3>SG activities</h3></div>
        </div>
        <div className="row mb-3">
          <div className="col-5">
            <a href="https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/SGActivityItem.aspx?ItemId=4">
              <div className="image_container"><img src="./assets/img/news_image_1.jpg" alt="" /></div>
            </a>
          </div>
          <div className="col-7">
            <a href="https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/SGActivityItem.aspx?ItemId=4">
              <div className="row"><div className="column date">13 December 2023</div></div>
              <div className="row"><div className="column news_title">Townhall meeting!</div></div>
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
              <div className="row"><div className="column date">12 December 2023</div></div>
              <div className="row"><div className="column news_title">UNCTAD Women Network Picnic and Reconnecting</div></div>
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
              <div className="row"><div className="column date">12 December 2023</div></div>
              <div className="row"><div className="column news_title">El Pais interview with our SG El Pais interview</div></div>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="column more_link_container">
            <a href="See more">See more</a>
          </div>
        </div>
      </div>
      <div className="col">
        Calendar
      </div>
      <div className="col">
        UNCTAD60
      </div>
    </div>
  );
}

export default App;
