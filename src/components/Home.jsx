import React from "react";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="flex flex-col justify-between">
      <Banner>
        <h2 className="text-3xl text-black font-extrabold text-center my-24">
          Home Page
        </h2>
      </Banner>
    </div>
  );
};

export default Home;
