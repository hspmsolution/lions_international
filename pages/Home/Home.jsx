import About from './About/About.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Slider from '../../components/Slider/Slider.jsx';
import Counter from './Counters/Counters.jsx';

function Home() {
    return (
      <div className="App">
        <Navbar />
        <Slider />
        <About />
        <Counter />
      </div>
    );
}
  
export default Home;