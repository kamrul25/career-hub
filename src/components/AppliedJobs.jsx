import React, { useContext, useEffect, useState } from "react";
import Banner from "./Banner";
import { JobsContext } from "../App";
import { getAppliedJob } from "./utilities/fakedb";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
  const jobFeatures = useContext(JobsContext || []);
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    const storedApplied = getAppliedJob();
    let newJob = [];
    for (const id in storedApplied) {
      const exist = jobFeatures.filter((feature) => feature.id === id);
      newJob.push(...exist);
    }
    setAllJobs(newJob);
  }, [jobFeatures]);

  return (
    <div className="flex flex-col justify-between ">
      <Banner>
        <h2 className="text-3xl text-black font-extrabold text-center my-24">
          Applied Jobs
        </h2>
      </Banner>
      <div className=" mt-32 -mb-28 my-container">
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
