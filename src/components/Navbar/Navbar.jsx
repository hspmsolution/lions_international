import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import logo2 from '../../assets/img/logo2.png';
import logo from '../../assets/img/logo.png';
import PopupMenu from './PopupMenu';
import "./navbar.css";

function Navbar() {
  // const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   function handleScroll() {
  //     setScrollPosition(window.pageYOffset);
  //     if (scrollPosition > 650) {
  //       return 'scrolled';
  //     }
  //       return '';
  //   }

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [scrollPosition]);

  return (
    <>
      {/* {scrollPosition > 650 ? ( */}
        <div id="header">
          <div className='container-flex d-flex align-items-center'>
            <a href="/" className="logo"><img src={logo} className="img-logo" alt="Lions Club" /></a>
            <a href="/" id="logo2" className="logo" style={{marginRight: 'auto'}}><img src={logo2} className="img-logo" alt="Lions Club" /></a>
            <input type="checkbox" id="chk" />
            <label htmlFor="chk" className="show-menu-btn">
              <i className="fas fa-bars"><FontAwesomeIcon icon={faBars} /></i>
            </label>
            <nav>
              <ul className="menu">
                <a href="/">Home</a>
                <a><PopupMenu name="About" menuItems={["Governer", "DG Team", "About District 3234D2", "Organization Chart"]} /></a>
                <a href="/">Events</a>
                <a href="/">Activities</a>
                <a><PopupMenu name="Membership" menuItems={["Member Directory", "Business Directory", "Download Member Data"]} /></a>
                <a><PopupMenu name="Resources" menuItems={["News", "Gallery", "Global Priorities", "Download Resources"]} /></a>
                <a href="/">Login</a>
                <a href="/">My LCI</a>
                <label htmlFor="chk" className="hide-menu-btn">
                  <i className="fas fa-times"><FontAwesomeIcon icon={faTimes} /></i>
                </label>
              </ul>
            </nav>
          </div>
        </div>
      {/* ) : null} */}
    </>
  );
};

export default Navbar;

/*

import logo from '../../assets/img/logo.png';
import logo2 from '../../assets/img/logo2.png';
import PopupMenu from './PopupMenu';
import './navbar.css';
import { useEffect, useState } from 'react';

// import React from "react";
// import "./navbar.css";

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarClass, setNavbarClass] = useState('');

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);
      if (scrollPosition > 650) {
        setNavbarClass('scrolled');
      } else {
        setNavbarClass('');
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
    <div style={{position: 'relative'}}>
      <div className='dist-bg col-lg-12 d-flex align-items-center'>
        <a href="index.php" id="logo2" className="logo col-lg-4"><img src={logo2} className="img-logo d-flex m-auto" alt="Lions Club" /></a>
        <div className='col-lg-5'><h3 className='dist-li'><center>LIONS INTERNATIONAL</center></h3>
        <h3 className='dist-no'><center>DISTRICT 3234-D2</center></h3></div>
      </div>
    </div>
    <>
    {scrollPosition > 300 ? (
    <div className={`header fixed-top ${navbarClass}`} style={{position: 'relative', backgroundColor: '#000'}}>
      <div className="container-flex d-flex align-items-center">      
        <a href="index.php" className="logo"><img src={logo} className="img-logo" alt="Lions Club" /></a>
        <a href="index.php" id="logo2" className="logo mr-auto"><img src={logo2} className="img-logo" alt="Lions Club" /></a>
        <nav className="nav-menu d-none d-lg-block">
          <ul className="menu" style={{alignItems: 'center'}}>
            <li className="active"><a href="/" className="nav-link" >Home</a></li>
            <li className="drop-down"><a href="/"><PopupMenu name="About" menuItems={["Governer", "DG Team", "About District 3234D2", "Organization Chart"]} /></a></li>
            <li><a href="/" className="nav-link" >Events</a></li>
            <li><a href="/" className="nav-link" >Activities</a></li>
            <li className="drop-down"><a href="/"><PopupMenu name="Membership" menuItems={["Member Directory", "Business Directory", "Download Member Data"]} /></a></li>
            <li className="drop-down"><a href="/"><PopupMenu name="Resources" menuItems={["News", "Gallery", "Global Priorities", "Download Resources"]} /></a></li>
            <li><a href="/" className="nav-link" >Login</a></li>
            <li><a href="/" className="nav-link" >My LCI</a></li>
          </ul>
        </nav>
      </div>
    </div>
    ) : null}
    </>
    </>
  );
};

export default Navbar;

*/