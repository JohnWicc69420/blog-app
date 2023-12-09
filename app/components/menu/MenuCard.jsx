import React from "react";
import Link from "next/link";

const MenuCard = ({ id, cat, bgColor, hasImage, img, date, title, writer }) => {
  return (
    <Link href={`blog/${id}`}>
      <div className="flex items-center gap-4 h-full w-full cursor-pointer">
        {hasImage && (
          <div>
            <div className="h-[60px] w-[60px] overflow-hidden rounded-full border-2 border-gray-400 flex items-center justify-center">
              <img className=" h-full w-full object-cover" src={img} alt="" />
            </div>
          </div>
        )}
        <div className="flex flex-col items-start">
          <span
            className={` text-[#fff] ${bgColor} text-xs py-1 px-2 rounded-xl mb-2`}
          >
            {cat}
          </span>
          <h1 className="text-[#626262] dark:text-[#a6a6a6] font-medium line-clamp-2">
            {title}
          </h1>
          <div>
            <span className="text-xs font-medium">{writer}</span>
            <span className="text-xs font-medium"> - </span>
            <span className="text-xs text-[#626262] font-medium">{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MenuCard;
