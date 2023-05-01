import React from "react";
import { Link } from "react-router-dom";

const JobFeature = ({ feature }) => {
  const { id, companyLogo, jobTitle, companyName, location, jobType, salary } =
    feature;
  // console.log(location)
  return (
    <div className="rounded-lg shadow-sm p-9 border hover:border-2">
      <img src={companyLogo} alt="" className="h-9 mb-7" />
      <h2 className="text-xl font-extrabold text-[#474747] mb-2">{jobTitle}</h2>
      <p className="text-lg font-semibold text-[#757575] mb-3">{companyName}</p>
      <button className="btn-vice-versa">{jobType[1]}</button>
      <button className="btn-vice-versa">{jobType[0]}</button>
      <div className="flex justify-between items-center mb-5">
        <div className="flex justify-between items-center mr-2">
          <img src="./assets/Icons/Frame-4.png" alt="" />{" "}
          <small className="ml-2">{location}</small>
        </div>
        <div className="flex justify-between items-center ml-2">
          <img src="./assets/Icons/Frame.png" alt="" /> 
          <small className="ml-2">{salary}</small>
        </div>
      </div>

      <Link to={`/jobDetails/${id}`} className="btn rounded-lg  py-4 px-6" >View Details</Link>
    </div>
  );
};

export default JobFeature;
