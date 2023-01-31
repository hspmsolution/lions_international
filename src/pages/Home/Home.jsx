import About from "./About/About.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Slider from "../../components/Slider/Slider.jsx";
import Counters from "./Counters/Counters.jsx";
import MyDataTable from "../Home/Table/Table";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <About />
      <Counters />
      <div class="row" style={{width: '100%'}}>
        <div class="col-md-5">
          <MyDataTable
            className="align-center table-padding"
            names={[
              "POONA GANESHKHIND",
              "LONAVLA SUPREMOS",
              "PUNE AGRASEN",
              "POONA SARASBAUG",
              "PUNE PRABHAT",
              "NASHIK ROYALS",
              "POONA",
              "POONA CENTRAL",
              "TALEGAON",
              "KOPERGAON",
              "abc"
            ]}
            scores={[769, 340, 297, 222, 219, 200, 198, 166, 150, 144]}
          />
        </div>
        <div class="col-md-6" style={{padding: 0}}>
          <MyDataTable
            className="align-center table-padding"
            names={[
              "POONA GANESHKHIND",
              "LONAVLA SUPREMOS",
              "PUNE AGRASEN",
              "POONA SARASBAUG",
              "PUNE PRABHAT",
              "NASHIK ROYALS",
              "POONA",
              "POONA CENTRAL",
              "TALEGAON",
              "KOPERGAON",
              "abc"
            ]}
            scores={[769, 340, 297, 222, 219, 200, 198, 166, 150, 144]}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
