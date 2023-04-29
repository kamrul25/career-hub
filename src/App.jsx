import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col justify-between gap-28">
      {/* heding */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
