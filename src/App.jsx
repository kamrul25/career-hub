import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col justify-between gap-28">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer> 

      </div>
  );
}

export default App;
