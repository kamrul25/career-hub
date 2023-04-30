import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "./components/Navbar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col justify-between gap-28 relative">
      <div >
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer> 

      </div>
  );
}

export default App;
