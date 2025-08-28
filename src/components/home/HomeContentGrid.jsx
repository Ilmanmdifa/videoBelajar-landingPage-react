import React from "react";
import GridCard from "./GridCard";

const HomeContentGrid = () => {
  return (
    <div className="grid grid-rows-1 md:grid-cols-3 gap-5 md:gap-x-6 md:gap-y-8">
      <GridCard />
      <GridCard />
      <GridCard />
      <GridCard />
    </div>
  );
};

export default HomeContentGrid;
