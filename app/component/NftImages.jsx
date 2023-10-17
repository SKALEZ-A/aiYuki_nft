"use client";
import React from "react";
import { useState, useEffect } from "react";

const NftImages = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 1300);

    return () => clearInterval(timer);
  }, [currentIndex, images]);

  return (
    <div className="col-span-4 place-self-center mt-4 lg:mt-0">
      <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
        <img src={images[currentIndex]} alt="Dashboard Image" />
      </div>
    </div>
  );
};

export default NftImages;
