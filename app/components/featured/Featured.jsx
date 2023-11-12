import React from "react";

const Featured = () => {
  return (
    <div className=" h-full px-8 md:px-32 xl:px-64 md:pt-10 pt-4 pb-10">
      <p className="md:text-6xl text-2xl line-clamp-3">
        <div className="md:leading-[76px]">
          <span className=" font-semibold">Hey, smag dev here!</span> Discover
          my stories and creative ideas.
        </div>
      </p>
      <div className="bottom flex items-center pt-10 gap-10">
        <div
          className="left hidden md:flex items-center justify-center overflow-hidden
         min-h-[300px] min-w-[250px] max-h-[300px] max-w-[250px] 
         lg:min-h-[400px] lg:min-w-[500px] lg:max-h-[400px] lg:max-w-[500px]
         xl:min-h-[500px] xl:min-w-[625px] xl:max-h-[500px] xl:max-w-[625px]"
        >
          <img className="" src="/culture.png" alt="" />
        </div>
        <div className="right flex flex-col items-start">
          <h1 className=" text-3xl font-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <p className="text-[#626262] py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            nihil sit, omnis, pariatur ratione qui a reprehenderit alias
            asperiores nobis aliquam molestias nulla quos provident dolore saepe
            sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.
          </p>
          <button className="bg-[#ECECEC] p-3 rounded-md text-sm text-[#000]">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
