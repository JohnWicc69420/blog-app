"use client";

import ProfileCard from "../ProfileCard";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function posts({ params }) {
  const { id } = params;
  const posts = useSelector((state) => state.posts);
  const post = posts.filter((item) => item.id === id);

  const blogData = [
    {
      writer: "Isabella Rainier",
      writerImg: "/w5.png",
      img: "/urban.png",
      date: "19-03-2021",
    },
    {
      writer: "Oliver Westwood",
      writerImg: "/w4.png",
      img: "/wardrobe.png",
      date: "06-11-2023",
    },
    {
      writer: "Oliver Westwood",
      writerImg: "/w4.png",
      img: "/styles.png",
      date: "06-11-2023",
    },
    {
      writer: "Benjamin Everhart",
      writerImg: "/w6.png",
      img: "/art.png",
      date: "11-02-2023",
    },
    {
      writer: "Lucas Hawthorne",
      writerImg: "/w2.png",
      img: "/patagonia.png",
      date: "30-09-2021",
    },
  ];

  const randomNumber = Math.floor(Math.random() * 5);
  const currentDate = new Date();
  const formattedCurrentDate = `${currentDate
    .getDate()
    .toString()
    .padStart(2, "0")}-${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${currentDate.getFullYear()}`;

  return (
    <>
      {posts.length > 0 ? (
        <div className="flex screenSize flex-col lg:gap-12 gap-10 pt-8 dark:text-[#ddd] dark:bg-[#0f172a] px-4 md:px-20 xl:px-40 2xl:px-60">
          <div className="top flex md:flex-row flex-col items-center gap-6 justify-between">
            <div className=" md:w-2/5">
              <h1 className="text-2xl line-clamp-2 font-semibold lg:text-4xl xl:font-extrabold lg:font-bold xl:leading-[45px] mb-4 lg:mb-12">
                {post[0]?.title}
              </h1>
              <ProfileCard
                date={formattedCurrentDate}
                writer={blogData[randomNumber]?.writer}
                writerImg={blogData[randomNumber]?.writerImg}
              />
            </div>
            <div className="overflow-hidden">
              <div className="h-[200px] w-[340px] lg:h-[270px] lg:w-[459px] xl:h-[340px] xl:w-[578px] overflow-hidden">
                {post?.img && (
                  <Image
                    className="w-full h-full object-cover"
                    src={URL.createObjectURL(post?.img)}
                    height={600}
                    width={600}
                    alt=""
                  />
                )}
              </div>
            </div>
          </div>
          <div className="bottom flex items-start flex-row lg:gap-12 gap-8">
            <div className="container flex flex-col items-start gap-8 mb-4 mt-10">
              <div className="details">{post?.desc}</div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="flex screenSize flex-row  pt-8
       dark:text-[#ddd] dark:bg-[#0f172a] px-4 md:px-20 xl:px-40 2xl:px-60 text-2xl font-semibold"
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
