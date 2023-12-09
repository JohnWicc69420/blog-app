import React from "react";
import blogs from "@/utils/data";
import Link from "next/link";

const Featured = async () => {
  const randNumber = Math.floor(Math.random() * 18);
  const data = await blogs();
  const post = data[randNumber];
  const id = post._id;
  return (
    <>
      <div className="h-full md:pt-10 pt-4 mb-12">
        <p className="lg:text-6xl md:text-4xl text-3xl line-clamp-3">
          <div className="lg:leading-[76px] md:leading-[50px] sm:leading-[40px]">
            <span className=" font-semibold">Hey, smag dev here!</span> Discover
            my stories and creative ideas.
          </div>
        </p>
        <div className="bottom flex items-center pt-10 gap-10">
          <Link href={`blog/${id}`}>
            <div
              className="left cursor-pointer rounded-3xl hidden md:flex items-center justify-center overflow-hidden
          h-[280px] min-w-[350px]
         lg:h-[360px] lg:min-w-[450px] 
         2xl:h-[440px] 2xl:min-w-[550px] "
            >
              <img
                className="object-cover hover:scale-103 transition-pic h-full w-full"
                src={post?.img}
                alt=""
              />
            </div>
          </Link>
          <div className="right flex flex-col items-start">
            <h1 className=" lg:text-3xl lg:font-bold text-xl line-clamp-2 font-bold">
              {post?.title}
            </h1>
            <p className="text-[#a6a6a6] my-4 lg:text-base text-sm line-clamp-6 font-medium">
              {post?.desc}
            </p>
            <Link href={`blog/${id}`}>
              <button
                className="bg-[#ECECEC] p-3 font-medium rounded-md 
            text-sm text-[#000]"
              >
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
