import React, { useContext, useState } from "react";
import JobFeature from "./JobFeature";
import { JobsContext } from "../App";

const JobFeatures = () => {
  const jobFeatures = useContext(JobsContext || []);
  const [fold, setFold] = useState(true);
  const [allJobs, setAllJobs] = useState(jobFeatures);

  const showAllJobs = (jobFeatures) =>{
    if(jobFeatures > 4 && fold === 'true'){
      jobFeatures = jobFeatures.slice(0,4);
      setAllJobs(jobFeatures)
    }else{
      setAllJobs(jobFeatures);
    }
  }
// console.log(allJobs)
  return (
    <div>
      <div className="flex flex-col  items-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-10 px-4 md:px-24 lg:p-16">
          {jobFeatures.map((feature) => (
            <JobFeature key={feature.id} feature={feature}></JobFeature>
          ))}
        </div>
        <button
          className="btn rounded-lg py-4 px-6"
          onClick={() => setFold(!fold)}
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default JobFeatures;
