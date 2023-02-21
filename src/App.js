import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css"
import About from "./pages/About/About";
import MyTable from "./pages/Home/Table/Table"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);
      if (scrollPosition > 650) {
        return 'scrolled';
      }
      return '';
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      {scrollPosition > 650 ? (
        <Navbar />
      ) : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/governor" element={<About />} />
        <Route path="/membership/directory" element={<MyTable />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;