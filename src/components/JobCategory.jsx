import React from 'react';

const JobCategory = ({category}) => {
    const {categoryLogo, categoryName, availableJobs} = category;
    return (
        <div className="w-[300px h-48 rounded-lg p-9 bg-blue-100">
            <img src={categoryLogo} alt="" className="mb-7 rounded-lg "/>
            <p className="text-lg text-[#474747] font-extrabold mb-2">{categoryName}</p>
            <p><small className="text-sm font-medium text-[#A3A3A3]">{availableJobs}</small></p>
        </div>
    );
};

export default JobCategory;