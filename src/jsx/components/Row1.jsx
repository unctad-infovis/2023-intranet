import React, { /* useState, useEffect, useRef */ } from 'react';

function App() {
  return (
    <div className="row mt-1 mb-1">
      <div className="col col-4 p-2 carousel_container">
        <div className="bg p-0 box">
          <div className="row pt-0 pe-0 pb-0 pe-0 mb-0">
            <div className="col">
              <div className="image_container"><img className="box" src="./assets/img/header_image_01.jpg" alt="" /></div>
            </div>
          </div>
          <div className="row p-0 m-0 mt-3 mb-3 title">
            <div className="col col-4 left pb-3">
              <h3>Welcome</h3>
            </div>
            <div className="col col-8 right ps-3">
              <h4>Trade, Environment, Climate Change and Sustainable Development Branch in the Division on International Trade and Commodities (DITC).</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="col col-4 p-2 quick_links_container">
        <div className="bg p-3 box">
          <div className="row mb-3">
            <div className="col">
              <h3>
                Quick
                {' '}
                <span>links</span>
              </h3>
            </div>
          </div>
          <div className="row quick_links_row">
            <div className="col col-3 p-0 m-0">
              <a className="quick_links_link" href="https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/SitePages/Organigram.aspx">
                <img className="quick_links_img" src="./assets/img/organigram_OFF2.png" alt="ORGANIGRAM" />
                <div className="quick_links_txt">ORGANIGRAM</div>
              </a>
            </div>
            <div className="col col-3 p-0 m-0">
              <a className="quick_links_link" href="https://intranet.unctad.org/programme-support-and-management-service/human-resources-management/staff-movements">
                <img className="quick_links_img" src="./assets/img/moves_OFF2.png" alt="MOVES" />
                <div className="quick_links_txt">MOVES</div>
              </a>
            </div>
            <div className="col col-3 p-0 m-0">
              <a className="quick_links_link" href="http://www.myplanetfood.ch/les-cafeterias/">
                <img className="quick_links_img" src="./assets/img/menu_OFF2.png" alt="MENU" />
                <div className="quick_links_txt">MENU</div>
              </a>
            </div>
            <div className="col col-3 p-0 m-0">
              <a className="quick_links_link" href="https://sss-id.unog.un.org/ords/f?p=100:47">
                <img className="quick_links_img" src="./assets/img/visitors_OFF1.png" alt="VISITORS" />
                <div className="quick_links_txt">VISITORS</div>
              </a>
            </div>
          </div>
          <div className="row quick_links_row">
            <div className="col col-3 p-0 m-0">
              <a className="quick_links_link" href="https://sss-id.unog.un.org/ords/f?p=100:47">
                <img className="quick_links_img" src="./assets/img/career_OFF1.png" alt="CAREERS" />
                <div className="quick_links_txt">CAREERS</div>
              </a>
            </div>
            <div className="col col-3 p-0 m-0">
              <a className="quick_links_link" href="https://inspira.un.org/psp/PUNA1J/?cmd=login&amp;languageCd=ENG&amp;">
                <img className="quick_links_img" src="./assets/img/inspira_OFF4.png" alt="INSPIRA" />
                <div className="quick_links_txt">INSPIRA</div>
              </a>
            </div>
            <div className="col col-3 p-0 m-0">
              <a className="quick_links_link" href="https://umoja.un.org/">
                <img className="quick_links_img" src="./assets/img/umoja_OFF3.png" alt="UMOJA" />
                <div className="quick_links_txt">UMOJA</div>
              </a>
            </div>
            <div className="col col-3 p-0 m-0">
              <a className="quick_links_link" href="https://intranet.unctad.org/teams/RMS/TREQ/SitePages/Home.aspx">
                <img className="quick_links_img" src="./assets/img/etravel_OFF2.png" alt="eTRAVEL" />
                <div className="quick_links_txt">eTRAVEL</div>
              </a>
            </div>
          </div>
          <div className="row quick_links_row">
            <div className="col col-3 p-0 m-0">
              <a className="quick_links_link" href="https://www.ungeneva.org/en/blue-book">
                <img className="quick_links_img" src="./assets/img/bluebook_OFF2.png" alt="BLUEBOOK" />
                <div className="quick_links_txt">BLUEBOOK</div>
              </a>
            </div>
            <div className="col col-3 p-0 m-0">
              <a className="quick_links_link" href="https://ask.unog.ch/library/faq/255027">
                <img className="quick_links_img" src="./assets/img/holidays_OFF2.png" alt="HOLIDAYS" />
                <div className="quick_links_txt">HOLIDAYS</div>
              </a>
            </div>
            <div className="col col-3 p-0 m-0">
              <a className="quick_links_link" href="https://intranet.unctad.org/teams/RMS/HRMS/FWA/SitePages/Home.aspx">
                <img className="quick_links_img" src="./assets/img/FWA_OFF1.png" alt="FWA" />
                <div className="quick_links_txt">FWA</div>
              </a>
            </div>
            <div className="col col-3 p-0 m-0">
              <a className="quick_links_link" href="https://unitednations.sharepoint.com/sites/UNCTAD_Intranet/Lists/Quick%20links/SeeAllView.aspx">
                <img className="quick_links_img" src="./assets/img/all_OFF1.png" alt="SEE ALL" />
                <div className="quick_links_txt">SEE ALL</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
