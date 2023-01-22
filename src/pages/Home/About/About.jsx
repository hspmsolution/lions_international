import './about.css';
import logo2 from '../../../assets/img/logo2.png';

function About() {
    return(
        <div className="about  container mt-0">
            <div className="animate_dist">
                <h1 className="animated">About District 3234-D2</h1>
            </div>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-md-3">
                        <img src={logo2} alt=""/>
                    </div>
                    <div className="col-md-9">
                        <p>WELCOME TO OUR WEBSITE OF LIONS CLUB INTERNATIONAL’s DISTRICT 3234-D2. and all members of our
                            District, 3234-D2.
                            SOW SERVICE SEEDS with KINDNESS IN UNITY AND DIVERSITY to Give More for Community. Your journey
                            through the web pages is made extremely simple with distinct information about our organization
                            and its administrative functioning and reporting.</p>
                        <div id="audio">
                            <h4>Listen To Our Theme Song</h4>
                            <a href="/" onclick="playAudio()" type="button"><i className="icofont-play-alt-1"></i></a>
                            <a href="/" onclick="pauseAudio()" type="button"><i className="icofont-pause"></i></a>
                            <audio id="myAudio">
                                <source src="./img/anthem.mpeg" type="audio/ogg"/>
                            </audio>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;