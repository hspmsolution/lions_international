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
      if (scrollPosition > 150) {
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

{/*

<header id="header" className="fixed-top">
  <div className="container-flex d-flex align-items-center">

    <!-- <h1 className="logo mr-auto"><a href="index.html">BizLand<span>.</span></a></h1> -->
    <!-- Uncomment below if you prefer to use an image logo -->
    <a href="index.php" className="logo"><img src="./img/logo.png" className="img-logo" alt="Lions Club"></a>
    <a href="index.php" id="logo2" className="logo mr-auto"><img src="./img/logo2.png" className="img-logo" alt="Lions Club"></a>
    <nav className="nav-menu d-none d-lg-block">
      <ul>
        <li className="active"><a href="./index.php" className="nav-link">Home</a></li>
        <li className="drop-down"><a>About</a>
          <ul>
            <li><a className="dropdown-item" href="./our-governer.php">Governor</a></li>
            <li><a className="dropdown-item" href="./dgteam.php">DG Team</a></li>
            <li><a className="dropdown-item" href="./about-district.php">About District 3234D2</a></li>
            <li>  <a className="dropdown-item" href="./organization-chart.php">Organization Chart</a></li>
          </ul>
        </li>
         <li><a className="nav-link" href="./event.php">Events</a></li>
        <li><a className="nav-link" href="./activities.php">Activities</a></li>
        <li className="drop-down"><a>Membership</a>
          <ul>
            <li><a className="dropdown-item" href="./member-directory.php?page=1">Member Directory</a></li>
            <li><a className="dropdown-item" href="./business-directory.php?page=1">Business Directory</a></li>
            <li><a href="./download.php" className="dropdown-item">Download Member Data</a></li>
          </ul>
        </li>
        <li className="drop-down nav-link"><a>Resources</a>
          <ul>
            <li><a className="dropdown-item" href="./news.php">News</a></li>
            <li><a className="dropdown-item" href="./gallery.php">Gallery</a></li>
            <li><a href="./global.php" className="dropdown-item">Global Priorities</a></li>
            <li><a className="dropdown-item" href="./download-resources.php">Download Resources</a></li>
          </ul>
        </li>
        <li><a href="./login.php" className="nav-link" target="_blank">Login</a></li>
        <li><a href="https://account.lionsclubs.org/account/login?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dlci-home-app%26redirect_uri%3Dhttps%253A%252F%252Fmyapps.lionsclubs.org%252Fauth-callback%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%2520lci-userapi%2520lci-mobileapi%2520lci-reporting%26state%3D2e6e26ee576941108ab473d0d5a2c5f7%26nonce%3De0df29caf3164ec4845741c4bef00b9e" target="_blank" className="nav-link">My LCI</a></li>
      </ul>
    </nav><!-- .nav-menu -->

  </div>
</header>

*/}










// function Navbar() {
//     return(
//         <div>
//             <header id="header">
//                 <div className="container-flex">
//                     <a href="index.js" className="logo"><img src={logo} className="img-logo" alt="Lions Club" /></a>
//                     <a href="index.js" id="logo2" className="logo mr-auto"><img src={logo2} className="img-logo" alt="Lions Club" /></a>
//                     <nav className="nav-menu">
//                         <ul>
//                             <li className="active"><a href="Home.js" className="nav-link">Home</a></li>                            
//                             <li className="drop-down"><a href="About.js">
//                                 <PopupMenu className="popup-menu"
//                                     name="About"
//                                     menuItems={["Governor", "DG Team", "About District 3234D2", "Organization Chart"]}
//                                 />
//                             </a>                            
//                             </li>
//                             <li><a className="nav-link" href="Events.js">Events</a></li>
//                             <li><a className="nav-link" href="Activities.js">Activities</a></li>
//                             <li className="drop-down"><a href="Membership.js">
//                                 <PopupMenu className="popup-menu"
//                                     name="Membership"
//                                     menuItems={["Member Directory", "Business Directory", "Download Member Data"]}
//                                 />
//                             </a>
//                             </li>
//                             <li className="drop-down"><a href="Resources.js">
//                                 <PopupMenu className="popup-menu"
//                                     name="Resources"
//                                     menuItems={["News", "Gallery", "Global Priorities", "Download Resources"]}
//                                 />
//                             </a>
//                             </li>
//                             <li><a href="Login.js" className="nav-link" target="_blank">Login</a></li>
//                             <li><a href="https://account.lionsclubs.org/account/login?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dlci-home-app%26redirect_uri%3Dhttps%253A%252F%252Fmyapps.lionsclubs.org%252Fauth-callback%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%2520lci-userapi%2520lci-mobileapi%2520lci-reporting%26state%3D2e6e26ee576941108ab473d0d5a2c5f7%26nonce%3De0df29caf3164ec4845741c4bef00b9e" target="_blank" rel="noreferrer" className="nav-link">My LCI</a></li>
//                         </ul>
//                     </nav>

//                 </div>
//             </header>
//         </div>
//     );
// }

// export default Navbar;

