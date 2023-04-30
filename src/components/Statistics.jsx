import React from "react";
import { useLoaderData } from "react-router-dom";
// import Rechart from './Rechart';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Banner from "./Banner";

const Statistics = () => {
  const sta = useLoaderData();

  return (
    <div className="flex flex-col justify-between">
      <Banner>
        <h2 className="text-3xl text-black font-extrabold text-center my-24">
          Statistics
        </h2>
      </Banner>
      <div className="my-container -p-4 mt-24 -mb-36">
        <BarChart
          width={900}
          height={300}
          data={sta}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip cursor={{ stroke: "red", strokeWidth: 2 }} />
          <Legend />
          <Bar dataKey="mark" stackId="a" fill=" #82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
