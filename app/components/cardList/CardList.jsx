import React from "react";
import Card from "../card/Card";
import CategoryList from "../categoryList/CategoryList";

const data = [
  {
    id: "1",
    img: "/coding.png",
    date: "11-02-2023",
    cat: "Coding",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "2",
    img: "/travel.png",
    date: "30-09-2021",
    cat: "Travel",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "3",
    img: "/food.png",
    date: "16-07-2010",
    cat: "Food",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "4",
    img: "/style.png",
    date: "06-11-2023",
    cat: "Style",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "5",
    img: "/fashion.png",
    date: "19-03-2021",
    cat: "Fashion",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "6",
    img: "/culture.png",
    date: "11-02-2023",
    cat: "Culture",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "7",
    img: "/coding.png",
    date: "11-02-2023",
    cat: "Coding",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "8",
    img: "/travel.png",
    date: "30-09-2021",
    cat: "Travel",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "9",
    img: "/food.png",
    date: "16-07-2010",
    cat: "Food",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "10",
    img: "/style.png",
    date: "06-11-2023",
    cat: "Style",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "11",
    img: "/fashion.png",
    date: "19-03-2021",
    cat: "Fashion",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "12",
    img: "/culture.png",
    date: "11-02-2023",
    cat: "Culture",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "13",
    img: "/coding.png",
    date: "11-02-2023",
    cat: "Coding",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },

  {
    id: "14",
    img: "/travel.png",
    date: "30-09-2021",
    cat: "Travel",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "15",
    img: "/food.png",
    date: "16-07-2010",
    cat: "Food",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "16",
    img: "/style.png",
    date: "06-11-2023",
    cat: "Style",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "17",
    img: "/fashion.png",
    date: "19-03-2021",
    cat: "Fashion",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "18",
    img: "/culture.png",
    date: "11-02-2023",
    cat: "Culture",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
];

const CardList = ({ slug }) => {
  let catData;
  {
    catData =
      slug === null
        ? data
        : (catData = data.filter((item) => item.cat === slug));
  }
  return (
    <div className="h-full w-full pb-4 mb-8">
      <h1 className=" text-3xl font-bold md:mb-12 mb-6">Recent Posts</h1>
      <div className="flex items-start flex-col gap-8">
        {catData.slice(0, 5).map((item) => (
          <Card
            key={item.id}
            img={item.img}
            date={item.date}
            cat={item.cat}
            title={item.title}
            desc={item.desc}
          />
        ))}
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
