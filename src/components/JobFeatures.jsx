import React, { useEffect, useState } from "react";
import JobFeature from "./JobFeature";

const JobFeatures = () => {
  const [jobFeatures, setJobFeatures] = useState([]);
  useEffect(() => {
    fetch("jobFeatures.json")
      .then((res) => res.json())
      .then((data) => setJobFeatures(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-10 px-4 md:px-24 lg:p-16">
     {
         jobFeatures.map(feature => <JobFeature key={feature.id} feature={feature}></JobFeature> )
     }
    </div>
  );
};

export default JobFeatures;
