import React from "react";
import Link from "next/link";

const MenuCard = ({
  cat,
  bgColor,
  hasImage,
  img,
  date,
  title,
  desc,
  writer,
  writerImg,
}) => {
  return (
    <Link
      href={{
        pathname: "/blog",
        query: { img, date, title, desc, writer, writerImg },
      }}
    >
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
            className={`${bgColor} text-[#fff] text-xs py-1 px-2 rounded-xl mb-2`}
          >
            {cat}
          </span>
          <h1 className="text-[#626262] dark:text-[#a6a6a6] font-medium line-clamp-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h1>
          <div>
            <span className="text-xs font-medium">John Doe</span>
            <span className="text-xs font-medium"> - </span>
            <span className="text-xs text-[#626262] font-medium">
              01.09.2023
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MenuCard;
