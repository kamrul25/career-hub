import React, { useContext, useEffect, useState } from "react";
import Banner from "./Banner";
import { JobsContext } from "../App";
import { getAppliedJob } from "./utilities/fakedb";
import AppliedJob from "./AppliedJob";
import toast, { Toaster } from "react-hot-toast";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const AppliedJobs = () => {
  const jobFeatures = useContext(JobsContext || []);
  const [allJobs, setAllJobs] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const storedApplied = getAppliedJob();
    let newJob = [];
    for (const id in storedApplied) {
      const exist = jobFeatures.filter((feature) => feature.id === id);
      newJob.push(...exist);
    }
    setAllJobs(newJob);
  }, [jobFeatures]);

  const handleFilter = (filter) => {
    let newJob = [];
    let appliedArray = [];
    const storedApplied = getAppliedJob();
    for (const id in storedApplied) {
      const exist = jobFeatures.filter((feature) => feature.id === id);
      appliedArray.push(...exist);
    }

    if (filter === "remote") {
      const existApplied = appliedArray.filter(
        (feature) => feature.jobType[0] === "Remote"
      );
      newJob.push(...existApplied);
      setAllJobs(newJob);
      toast.success("Successfully show remote job!");
    } else {
      const existApplied = appliedArray.filter(
        (feature) => feature.jobType[0] === "Onsite"
      );
      newJob.push(...existApplied);
      setAllJobs(newJob);
    }
  };

  return (
    <div className="flex flex-col justify-between ">
      <Banner>
        <h2 className="text-3xl text-black font-extrabold text-center my-24">
          Applied Jobs
        </h2>
      </Banner>
      <div className="  mt-32 -mb-28 my-container relative">
        <div className=" rounded-lg absolute top-0 right-10 w-fit">
          <button
            className="py-5 bg-[#F4F4F4] text-[#474747] text-xl font-semibold  flex justify-between items-center gap-2 "
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <span className="pl-4">Filter By</span>{" "}
            <ChevronDownIcon className="w-5 h-5 " />
          </button>
          {isFilterOpen && (
            <div className="mt-3 px-2 flex  items-center gap-2">
              <p
                className="cursor-pointer  text-[#757575] hover:text-lg border-blue-300 rounded p-1  border"
                onClick={() => handleFilter("remote")}
              >
                Remote <Toaster />
              </p>
              <p
                className="cursor-pointer text-[#757575] hover:text-lg border-blue-300 rounded p-1 border"
                onClick={() => handleFilter("onsite")}
              >
                Onsite <Toaster />
              </p>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 gap-6">
          {allJobs.map((appliedJob) => (
            <AppliedJob
              key={appliedJob.id}
              appliedJob={appliedJob}
            ></AppliedJob>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
