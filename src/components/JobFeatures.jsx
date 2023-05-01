import React, { useContext } from "react";
import JobFeature from "./JobFeature";
import { JobsContext } from "../App";

const JobFeatures = () => {

  const jobFeatures = useContext(JobsContext)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-10 px-4 md:px-24 lg:p-16">
     {
         jobFeatures.map(feature => <JobFeature key={feature.id} feature={feature}></JobFeature> )
     }
    </div>
  );
};

export default JobFeatures;
