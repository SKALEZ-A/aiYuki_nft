"use client";
import React from "react";
import Image from "next/image";
import NftImages from "./NftImages";
// import { motion } from "framer-motion";

const imageUrls = [
  "/Images/Property_1.png",
  "/Images/Property_2.png",
  "/Images/Property_3.png",
  "/Images/Property_4.png",
  "/Images/Property_5.png",
];

const Dashboard = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left sm:pr-5 justify-self-start">
          {" "}
          <h1 className="text-white mb-3 text-4xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
            {" "}
            DISCOVER, COLLECT AND SELL REMARKABLE{" "}
            <span className="text-[#6EEBDD]">NFTs</span>
          </h1>
          <p className="text-slate-400">
            Many desktop publishing packages and web page editors now use lorem
            items as their defaults and many more uses chat gpt as the new
            model.
          </p>
          <div className="">
            <button className="px-6 py-3 sm:w-fit  rounded-full mr-4 bg-[#6EEBDD] hover:bg-slate-200 text-white">
              {" "}
              Explore now
            </button>
            <button className=" sm:w-fit  px-1 py-1 rounded-full bg-transparent hover:bg-slate-700  border bg-[#6EEBDD] mt-3">
              {/* <Link href="/CVPage.jsx"> */}
              <span className="text-white block bg-[#121212] hover:bg-slate-800 rounded-full py-2 px-5  ">
                Create{" "}
              </span>
              {/* </Link> */}
            </button>
          </div>
        </div>
        <NftImages images={imageUrls} />
      </div>
    </section>
  );
};

export default Dashboard;
