import About from './About/About.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Slider from '../../components/Slider/Slider.jsx';
import Counters from './Counters/Counters.jsx';

function Home() {
    return (
      <div className="App">
        <Navbar />
        <Slider />
        <About />
        <Counters />
      </div>
    );
}
  
export default Home;