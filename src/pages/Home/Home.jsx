import { useEffect, useState } from "react";
import Header from "./Header/Header.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Slider from "../../components/Slider/Slider.jsx";
import About from "./About/About.jsx";
// import ClubRank from "./Rank/ClubRank.jsx";
import Counters from "./Counters/Counters.jsx";
// import CustomPaginationActionsTable from "../Home/Table/Table";
// import Team from "./Team/Team.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function Home() {


  return (
    <div className="App">
      <Header />
      <Slider />
      <About />
      {/* <ClubRank /> */}
      <Counters />
      {/* <Team /> */}
    </div>
  );
}

export default Home;
