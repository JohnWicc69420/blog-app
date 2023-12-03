"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import ProfileCard from "./ProfileCard";
import Image from "next/image";
import Menu from "../components/menu/Menu";
import Comments from "../components/comments/Comments";

const page = () => {
  const searchParams = useSearchParams();
  const img = searchParams.get("img");
  const date = searchParams.get("date");
  const title = searchParams.get("title");
  const desc = searchParams.get("desc");
  const writer = searchParams.get("writer");
  const writerImg = searchParams.get("writerImg");

  return (
    <div className="flex flex-col lg:gap-12 gap-10 pt-8 dark:text-[#ddd] dark:bg-[#0f172a] px-8 md:px-20 xl:px-40 2xl:px-60">
      <div className="top flex md:flex-row flex-col items-center gap-6 justify-between">
        <div className=" md:w-2/5">
          <h1 className="text-2xl line-clamp-2 font-semibold lg:text-4xl xl:font-extrabold lg:font-bold xl:leading-[45px] mb-4 lg:mb-12">
            {title}
          </h1>
          <ProfileCard date={date} writer={writer} writerImg={writerImg} />
        </div>
        <div className="overflow-hidden">
          <div className="h-[200px] w-[340px] lg:h-[270px] lg:w-[459px] xl:h-[340px] xl:w-[578px] overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={img}
              height={600}
              width={600}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bottom flex items-start flex-row lg:gap-12 gap-8">
        <div className="container flex flex-col items-start gap-8">
          <div className="details text-justify">{desc}</div>
          <Comments />
        </div>
        <div className="menu md:flex hidden">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default page;
