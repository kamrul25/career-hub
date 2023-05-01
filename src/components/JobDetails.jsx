import React, { useContext } from "react";
import Banner from "./Banner";
import { JobDetailsContext } from "../App";
import { addToDb } from "./utilities/fakedb";
import toast, { Toaster } from 'react-hot-toast';

const JobDetails = () => {
  const [jobDetails, setJobDetails] = useContext(JobDetailsContext || []);
  const {
    id,
    jobTitle,
    location,
    salary,
    jobDescription,
    jobResponsibility,
    jobRequirements,
    contactInformation,
  } = jobDetails;
  const notify = () => toast.success("Successfully applied!");
  return (
    <div>
      <Banner>
        <h2 className="text-3xl text-black font-extrabold text-center my-24">
          Job Details
        </h2>
      </Banner>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-container mt-20 lg:mt-40 -mb-32">
        <div className="rounded-lg pt-6 px-4">
          <p className="mb-5">
            <span className="text-sm font-extrabold text-[#1A1919]">
              Job Description:{" "}
            </span>
            <span className="text-sm font-semibold text-[#757575]">
              {jobDescription}
            </span>
          </p>
          <p className="mb-5">
            <span className="text-sm font-extrabold text-[#1A1919]">
              Job Responsibility:{" "}
            </span>
            <span className="text-sm font-semibold text-[#757575]">
              {jobResponsibility}
            </span>
          </p>
          <div className="mb-5">
            <p className="text-sm font-extrabold text-[#1A1919]">
              Education Requirement :
            </p>
            <p className="text-sm font-semibold text-[#757575] mt-3">
              Bachelor degree to complete any reputational university.
            </p>
            <p className="text-sm font-semibold text-[#757575] mt-1">
              {jobRequirements}
            </p>
          </div>
          <div className="mb-5">
            <p className="text-sm font-extrabold text-[#1A1919]">
              Experiences:{" "}
            </p>
            <p className="text-sm font-semibold text-[#757575] mt-3">
              2-3 Years in this field.
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-lg p-6 bg-blue-50">
            <h4 className="text-lg font-extrabold text-[#1A1919] mb-5">
              Job Details
            </h4>
            <hr className="mb-5" />
            <div className="flex items-center gap-3 mb-5">
              <img src="../assets/Icons/Frame.png" alt="" />
              <p className="text-lg font-medium">
                <span className="text-[#1A1919]">Salary: </span>
                <span className=" text-[#757575]">{salary}(Per Month)</span>
              </p>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <img src="../assets/Icons/Frame-1.png" alt="" />
              <p className="text-lg font-medium">
                <span className="text-[#1A1919]">Job Title: </span>
                <span className=" text-[#757575]">{jobTitle}</span>
              </p>
            </div>
            <h4 className="text-lg font-extrabold text-[#1A1919] mt-7 mb-5">
              Contact Information
            </h4>
            <hr className="mb-5" />
            <div className="flex items-center gap-3 mb-5">
              <img src="../assets/Icons/Frame-2.png" alt="" />
              <p className="text-lg font-medium">
                <span className="text-[#1A1919]">Phone: </span>
                <span className=" text-[#757575]">
                  {contactInformation.phone}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <img src="../assets/Icons/Frame-3.png" alt="" />
              <p className="text-lg font-medium">
                <span className="text-[#1A1919]">Email: </span>
                <span className=" text-[#757575]">
                  {contactInformation.email}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-3 ">
              <img src="../assets/Icons/Frame-4.png" alt="" />
              <p className="text-lg font-medium">
                <span className="text-[#1A1919]">Address: </span>
                <span className=" text-[#757575]">{location}</span>
              </p>
            </div>
          </div>
          <button className="mt-4 btn w-full text-center rounded-lg py-4"
          onClick={() => addToDb(id)}
          >
            <p onClick={notify}>Apply Now </p> <Toaster />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
