import React, { useEffect, useState } from "react";
import JobCategory from "./JobCategory";

const JobCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("jobCategories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <>
      {categories.map((category) => (
        <JobCategory key={category.id} category={category}></JobCategory>
      ))}
    </>
  );
};

export default JobCategories;
