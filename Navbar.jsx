import logo from '../../assets/img/logo.png';
import logo2 from '../../assets/img/logo2.png';
import PopupMenu from './PopupMenu';
import './navbar.css';

function Navbar() {
    return(
        <div>
            <header id="header">
                <div className="container-flex">
                    <a href="index.js" className="logo"><img src={logo} className="img-logo" alt="Lions Club" /></a>
                    <a href="index.js" id="logo2" className="logo mr-auto"><img src={logo2} className="img-logo" alt="Lions Club" /></a>
                    <nav className="nav-menu">
                        <ul>
                            <li className="active"><a href="Home.js" className="nav-link">Home</a></li>                            
                            <li className="drop-down"><a href="About.js">
                                <PopupMenu className="popup-menu"
                                    name="About"
                                    menuItems={["Governor", "DG Team", "About District 3234D2", "Organization Chart"]}
                                />
                            </a>                            
                            </li>
                            <li><a className="nav-link" href="Events.js">Events</a></li>
                            <li><a className="nav-link" href="Activities.js">Activities</a></li>
                            <li className="drop-down"><a href="Membership.js">
                                <PopupMenu className="popup-menu"
                                    name="Membership"
                                    menuItems={["Member Directory", "Business Directory", "Download Member Data"]}
                                />
                            </a>
                            </li>
                            <li className="drop-down"><a href="Resources.js">
                                <PopupMenu className="popup-menu"
                                    name="Resources"
                                    menuItems={["News", "Gallery", "Global Priorities", "Download Resources"]}
                                />
                            </a>
                            </li>
                            <li><a href="Login.js" className="nav-link" target="_blank">Login</a></li>
                            <li><a href="https://account.lionsclubs.org/account/login?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dlci-home-app%26redirect_uri%3Dhttps%253A%252F%252Fmyapps.lionsclubs.org%252Fauth-callback%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%2520lci-userapi%2520lci-mobileapi%2520lci-reporting%26state%3D2e6e26ee576941108ab473d0d5a2c5f7%26nonce%3De0df29caf3164ec4845741c4bef00b9e" target="_blank" rel="noreferrer" className="nav-link">My LCI</a></li>
                        </ul>
                    </nav>

                </div>
            </header>
        </div>
    );
}

export default Navbar;