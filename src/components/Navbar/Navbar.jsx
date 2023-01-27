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
      if (scrollPosition > 300) {
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
      <div className='dist-bg' >
      <h3 className='dist-li'><center>LIONS INTERNATIONAL</center></h3>
        <h3 className='dist-no'><center>DISTRICT 3234-D2</center></h3>
      </div>
    </div>
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
    </>
  );
};

export default Navbar;