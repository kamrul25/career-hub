import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { JobDetailsContext } from "../App";

const AppliedJob = ({ appliedJob }) => {
  const [jobDetails, setJobDetails] = useContext(JobDetailsContext);

  const { id, companyLogo, jobTitle, location, salary, companyName, jobType } =
    appliedJob;
  return (
    <>
        
      <div className="flex flex-col lg:flex-row justify-between items-center gap-1 md:gap-10 lg:gap-80 p-6 border rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#F4F4F4] rounded-lg ">
            <div className="py-10 pl-20 md:px-10 md:py-20 ">
              <img src={companyLogo} alt="" className="w-36 h-14 " />
            </div>
          </div>
          <div className="py-6">
            <h2 className="text-xl font-extrabold text-[#474747] mb-2">
              {jobTitle}
            </h2>
            <p className="text-lg font-semibold text-[#757575] mb-3">
              {companyName}
            </p>
            <button className="btn-vice-versa">{jobType[0]}</button>
            <button className="btn-vice-versa">{jobType[1]}</button>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex justify-between items-center ">
                <img src="./assets/Icons/Frame-4.png" alt="" />{" "}
                <small className="ml-2 text-[#757575]">{location}</small>
              </div>
              <div className="flex justify-between items-center">
                <img src="./assets/Icons/Frame.png" alt="" />
                <small className="ml-2 text-[#757575]">{salary}</small>
              </div>
            </div>
          </div>
        </div>
        <Link
          to={`/jobDetails/${id}`}
          className="btn rounded-lg  py-4 px-6"
          onClick={() => setJobDetails(appliedJob)}
        >
          View Details
        </Link>
      </div>
    </>
  );
};

export default AppliedJob;
