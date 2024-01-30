"use client";
import { useSelector } from "react-redux";
import Card from "./Card";
import Link from "next/link";

export default function posts() {
  const data = useSelector((state) => state.posts);

  return (
    <>
      {data.length > 0 ? (
        <div
          className="flex screenSize flex-col lg:gap-12 gap-10 pt-8
       dark:text-[#ddd] dark:bg-[#0f172a] px-4 md:px-20 xl:px-40 2xl:px-60 w-full pb-5"
        >
          {data.map((post, index) => (
            <Card
              key={index}
              title={post?.title}
              id={post?.id}
              desc={post?.desc}
            />
          ))}
        </div>
      ) : (
        <div
          className="flex screenSize flex-row  pt-8
       dark:text-[#ddd] dark:bg-[#0f172a] w-full items-center
        justify-center px-4 md:px-20 xl:px-40 2xl:px-60 text-2xl font-semibold"
        >
          No blogs found, Create one&nbsp;
          <span>
            <Link href="/post" className=" underline">
              here
            </Link>
            <span>!</span>
          </span>
        </div>
      )}
    </>
  );
}
