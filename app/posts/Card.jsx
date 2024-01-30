import React from "react";
import Link from "next/link";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removePost } from "../../redux/features/postsSlice";

const Card = ({ id, title, desc }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(removePost(id));
  };

  return (
    <>
      {" "}
      <div
        className="flex md:gap-6 w-full items-center px-6 py-3 cursor-pointer dark:bg-[#0d1424] bg-[#fcfcfc] 
      shadow-md hover:scale-103 transition-card rounded-xl"
      >
        <Link href={`/posts/${id}`} className=" flex-1">
          <div className="right flex w-full flex-col items-start ">
            <div
              className=" text-xl line-clamp-1 text-[#626262] dark:text-[#ddd] font-semibold xl:text-2xl
             xl:font-bold mb-4 overflow-ellipsis md:w-[400px] w-[150px]"
            >
              {title}
            </div>
            <div
              className=" line-clamp-1 text-[#626262] dark:text-[#a6a6a6]
             text-sm md:text-base md:w-[400px] w-[150px] overflow-ellipsis"
            >
              {desc}
            </div>
          </div>{" "}
        </Link>

        <div className="ml-auto w-fit flex dark:text-[#ddd] text-[#626262] justify-end text-4xl">
          <BsTrash onClick={handleDeleteClick} className=" hover:scale-110" />
        </div>
      </div>{" "}
    </>
  );
};

export default Card;
