import React from "react";
import JobFeatures from "./JobFeatures";
import JobCategories from "./JobCategories";

const Home = () => {

  return (
    <div className="flex flex-col justify-between ">
      <div className=" flex flex-col lg:flex-row justify-center items-center gap-4 ">
        <div>
          <h2 className="text-7xl font-extrabold text-[#413939] mb-4">
            One Step <br /> Closer To Your <br />{" "}
            <span className="text-blue-300"> Dream Job</span>
          </h2>
          <p className="text-base font-medium text-gray-500 mb-4">
            Explore thousands of job opportunities with all the <br />{" "}
            information you need. Its your future. Come find it. Manage all{" "}
            <br /> your job application from start to finish.
          </p>
          <button className="btn rounded-lg  py-4 px-6">Get Started</button>
        </div>
        <div>
          <img
            src="../assets/All Images/P3OLGJ1 copy 1.png"
            alt=""
            className="object-cover w-full h-48 md:h-56 lg:h-[550px] "
          />
        </div>
      </div>

      <div className="mt-12 my-container">
        <div className="text-center mb-7">
          <h2 className="text-4xl font-extrabold text-[#413939] mb-4">
            {" "}
            Job Category List
          </h2>
          <p className="text-base font-medium text-gray-500">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
            <JobCategories></JobCategories>
        </div>
      </div>

      <div className="-mb-28">
        <div className="text-center mb-7">
          <h2 className="text-4xl font-extrabold text-[#413939] mb-4">
            {" "}
            Featured Jobs
          </h2>
          <p className="text-base font-medium text-gray-500">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <JobFeatures></JobFeatures>
      </div>
    </div>
  );
};

export default Home;
