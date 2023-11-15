import React from "react";

const CatBox = ({ title, bgColor }) => {
  return (
    <div
      className={`flex gap-[10px] px-5 py-3 items-center cursor-pointer shadow-md
      justify-center rounded-md ${bgColor} w-fit`}
    >
      <span className=" dark:text-[#000] text-sm font-medium">{title}</span>
    </div>
  );
};

export default CatBox;
