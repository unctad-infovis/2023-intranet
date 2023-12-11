import React, { /* useState, useEffect, useRef */ } from 'react';

function App() {
  return (
    <div className="row">
      <div className="col col-8 p-2 box carousel_container">
        <div className="video_container">
          <video controls>
            <track default kind="captions" srcLang="en" src="" />
            <source src="https://storage.unctad.org/intranet/Rafe%20Dent.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="title">
            <h3>Title</h3>
            <h4>Subtitle</h4>
          </div>
        </div>
      </div>
      <div className="col col-4 p-2 box quick_links_container">
        <div className="row">
          <div className="col col-3">
            <a className="quick_links_link" href="https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/Organigram.aspx">
              <img className="quick_links_img" src="./assets/img/organigram_OFF2.png" alt="ORGANIGRAM" />
              <div className="quick_links_txt">ORGANIGRAM</div>
            </a>
          </div>
          <div className="col col-3">
            <a className="quick_links_link" href="https://intranet.unctad.org/programme-support-and-management-service/human-resources-management/staff-movements">
              <img className="quick_links_img" src="./assets/img/moves_OFF2.png" alt="MOVES" />
              <div className="quick_links_txt">MOVES</div>
            </a>
          </div>
          <div className="col col-3">
            <a className="quick_links_link" href="http://www.myplanetfood.ch/les-cafeterias/">
              <img className="quick_links_img" src="./assets/img/menu_OFF2.png" alt="MENU" />
              <div className="quick_links_txt">MENU</div>
            </a>
          </div>
          <div className="col col-3">
            <a className="quick_links_link" href="https://sss-id.unog.un.org/ords/f?p=100:47">
              <img className="quick_links_img" src="./assets/img/visitors_OFF1.png" alt="VISITORS" />
              <div className="quick_links_txt">VISITORS</div>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col col-3">
            <a className="quick_links_link" href="https://sss-id.unog.un.org/ords/f?p=100:47">
              <img className="quick_links_img" src="./assets/img/career_OFF1.png" alt="CAREERS" />
              <div className="quick_links_txt">CAREERS</div>
            </a>
          </div>
          <div className="col col-3">
            <a className="quick_links_link" href="https://inspira.un.org/psp/PUNA1J/?cmd=login&amp;languageCd=ENG&amp;">
              <img className="quick_links_img" src="./assets/img/inspira_OFF4.png" alt="INSPIRA" />
              <div className="quick_links_txt">INSPIRA</div>
            </a>
          </div>
          <div className="col col-3">
            <a className="quick_links_link" href="https://umoja.un.org/">
              <img className="quick_links_img" src="./assets/img/umoja_OFF3.png" alt="UMOJA" />
              <div className="quick_links_txt">UMOJA</div>
            </a>
          </div>
          <div className="col col-3">
            <a className="quick_links_link" href="https://intranet.unctad.org/teams/RMS/TREQ/SitePages/Home.aspx">
              <img className="quick_links_img" src="./assets/img/etravel_OFF2.png" alt="eTRAVEL" />
              <div className="quick_links_txt">eTRAVEL</div>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col col-3">
            <a className="quick_links_link" href="https://www.ungeneva.org/en/blue-book">
              <img className="quick_links_img" src="./assets/img/bluebook_OFF2.png" alt="BLUEBOOK" />
              <div className="quick_links_txt">BLUEBOOK</div>
            </a>
          </div>
          <div className="col col-3">
            <a className="quick_links_link" href="https://ask.unog.ch/library/faq/255027">
              <img className="quick_links_img" src="./assets/img/holidays_OFF2.png" alt="HOLIDAYS" />
              <div className="quick_links_txt">HOLIDAYS</div>
            </a>
          </div>
          <div className="col col-3">
            <a className="quick_links_link" href="https://intranet.unctad.org/teams/RMS/HRMS/FWA/SitePages/Home.aspx">
              <img className="quick_links_img" src="./assets/img/FWA_OFF1.png" alt="FWA" />
              <div className="quick_links_txt">FWA</div>
            </a>
          </div>
          <div className="col col-3">
            <a className="quick_links_link" href="https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/Lists/Quick%20links/SeeAllView.aspx">
              <img className="quick_links_img" src="./assets/img/all_OFF1.png" alt="SEE ALL" />
              <div className="quick_links_txt">SEE ALL</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
