import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css"
import About from "./pages/About/About";
import MyTable from "./pages/Home/Table/Table"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
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