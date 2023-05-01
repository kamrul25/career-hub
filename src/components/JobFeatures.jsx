import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const JobFeatures = () => {

    // const features = useLoaderData();
    // console.log(features);

    useEffect(() => {
        fetch("jobFeatures.json").then(res=>res.json()).then(data => console.log(data))
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2-cols-2 lg:grid-cols-2 gap-3">
            
        </div>
    );
};

export default JobFeatures;