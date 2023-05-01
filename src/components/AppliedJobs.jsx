import React from "react";
import Banner from "./Banner";

const AppliedJobs = () => {
  return (
    <div className="flex flex-col justify-between ">
      <Banner>
        <h2 className="text-3xl text-black font-extrabold text-center my-24">
          Applied Jobs
        </h2>
      </Banner>
      <div className="-mb-28"></div>
    </div>
  );
};

export default AppliedJobs;
