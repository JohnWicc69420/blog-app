import React from "react";
import Image from "next/image";

const CatBox = ({ img, title, bgColor }) => {
  return (
    <div
      className={`flex gap-[10px] w-full px-10 py-4 items-center cursor-pointer
      justify-center rounded-md ${bgColor}`}
    >
      <div className="w-8 h-8 overflow-hidden rounded-full flex items-center justify-center">
        <Image
          className="object-cover h-full w-full"
          src={img}
          height={32}
          width={32}
          alt=""
        />
      </div>
      <span className=" dark:text-[#000] text-sm font-semibold">{title}</span>
    </div>
  );
};

export default CatBox;
