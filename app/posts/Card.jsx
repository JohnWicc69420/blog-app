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
      <Link href={`/posts/${id}`}>
        <div className="flex  md:gap-6 w-full items-center px-6 py-3 bg-[#172937] shadow-xl rounded-xl">
          <div className="right flex flex-col items-start ">
            <div
              className=" text-xl line-clamp-1 font-semibold xl:text-2xl
             xl:font-bold mb-4 overflow-ellipsis md:w-[400px] w-[200px]"
            >
              {title}
            </div>
            <div
              className=" line-clamp-1 text-[#626262] dark:text-[#a6a6a6]
             text-sm md:text-base md:w-[400px] w-[200px] overflow-ellipsis"
            >
              {desc}
            </div>
          </div>
          <div className="ml-auto text-3xl">
            <BsTrash
              onClick={handleDeleteClick}
              className="cursor-pointer hover:scale-110"
            />
          </div>
        </div>{" "}
      </Link>
    </>
  );
};

export default Card;
