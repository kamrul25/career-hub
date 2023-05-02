import React, { createContext, useEffect, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const JobsContext = createContext([]);
export const JobDetailsContext = createContext([]);

function App() {
  const jobFeatures = useLoaderData();
  const [jobDetails, setJobDetails] = useState([]);

  return (
    <div className="flex flex-col justify-between gap-28 relative">
      <div>
        <Navbar></Navbar>
      </div>
      <JobsContext.Provider value={jobFeatures}>

      <JobDetailsContext.Provider value={[jobDetails, setJobDetails]}>

          <Outlet></Outlet>

        </JobDetailsContext.Provider>

      </JobsContext.Provider>
      <Footer></Footer>
    </div>
  );
}

export default App;
