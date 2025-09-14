import React, { useEffect, useState } from "react";
import GridCard from "./GridCard";

const HomeContentGrid = () => {
  const [contentDataList, setContentDataList] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("products");

    if (savedData) {
      setContentDataList(JSON.parse(savedData));
    }
  }, []);
  return (
    <div className="grid grid-rows-1 md:grid-cols-3 gap-5 md:gap-x-6 md:gap-y-8">
      {contentDataList.length === 0 ? (
        <p className="col-span-full text-center sm:text-lg text-gray-500">
          Belum ada kelas yang tersedia
        </p>
      ) : (
        contentDataList.map((product) => (
          <GridCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default HomeContentGrid;
