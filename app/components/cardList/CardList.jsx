import React from "react";
import Card from "../card/Card";

const data = [
  {
    id: "1",
    img: "/culture.png",
    date: "11-02-2023",
    cat: "Cultre",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "2",
    img: "/culture.png",
    date: "11-02-2023",
    cat: "Cultre",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "3",
    img: "/culture.png",
    date: "11-02-2023",
    cat: "Cultre",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "4",
    img: "/culture.png",
    date: "11-02-2023",
    cat: "Cultre",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
];

const CardList = () => {
  return (
    <div className="h-full w-full py-4 mb-8">
      <h1 className=" text-3xl font-bold md:mb-12 mb-6">Recent Posts</h1>
      <div className="flex items-start flex-col lg:gap-12 gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="buttons flex items-center justify-between my-12">
        <button className="bg-[#C92C39] py-3 px-5 text-base text-[#fff] w-[125px]">
          Previous
        </button>
        <button className="bg-[#C92C39] py-3 px-5 text-base text-[#fff] w-[110px]">
          Next
        </button>
      </div>
    </div>
  );
};

export default CardList;
