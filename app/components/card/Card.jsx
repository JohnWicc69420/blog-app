import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="flex items-start lg:gap-10 gap-8">
      <div
        className="left hidden md:flex items-center justify-center overflow-hidden
        h-[280px] min-w-[350px]
        lg:h-[360px] lg:min-w-[450px] 
        2xl:h-[440px] 2xl:min-w-[550px] "
      >
        <img className="object-cover" src="/culture.png" alt="" />
      </div>
      <div className="right flex flex-col items-start">
        <div className="md:pb-8 pb-4">
          <span className=" text-gray-500 text-sm">11.02.2023</span>
          <span className=" text-gray-500 text-sm"> - </span>
          <span className=" text-[#dc143c] text-sm font-semibold">CULTURE</span>
        </div>
        <div className=" text-lg line-clamp-2 font-semibold md:text-3xl md:font-bold lg:mb-8 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
        <div className=" md:line-clamp-4 line-clamp-3 text-[#626262] text-sm md:text-base 2xl:line-clamp-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil
          sit, omnis, pariatur ratione qui a reprehenderit alias asperiores
          nobis aliquam molestias nulla quos provident dolore saepe sunt sequi?
          Dolor, obcaecati officiis! Ipsa, eos rem.
        </div>
        <button className=" font-semibold text-sm md:text-base mt-4 lg:pt-8 border-b-[#dc143c] border-b-2">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
