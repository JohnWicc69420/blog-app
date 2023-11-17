import React from "react";
import Card from "../card/Card";

const data = [
  {
    id: "1",
    writer: "Amelia Sterling",
    writerImg: "/w1.png",
    img: "/coding.png",
    date: "11-02-2023",
    cat: "Coding",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "2",
    writer: "Lucas Hawthorne",
    writerImg: "/w2.png",
    img: "/travel.png",
    date: "30-09-2021",
    cat: "Travel",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "3",
    writer: "Vivian Grace",
    writerImg: "/w3.png",
    img: "/food.png",
    date: "16-07-2010",
    cat: "Food",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "4",
    writer: "Oliver Westwood",
    writerImg: "/w4.png",
    img: "/style.png",
    date: "06-11-2023",
    cat: "Style",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "5",
    writer: "Isabella Rainier",
    writerImg: "/w5.png",
    img: "/fashion.png",
    date: "19-03-2021",
    cat: "Fashion",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "6",
    writer: "Benjamin Everhart",
    writerImg: "/w6.png",
    img: "/culture.png",
    date: "11-02-2023",
    cat: "Culture",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "7",
    writer: "Amelia Sterling",
    writerImg: "/w1.png",
    img: "/coding.png",
    date: "11-02-2023",
    cat: "Coding",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "8",
    writer: "Lucas Hawthorne",
    writerImg: "/w2.png",
    img: "/travel.png",
    date: "30-09-2021",
    cat: "Travel",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "9",
    writer: "Vivian Grace",
    writerImg: "/w3.png",
    img: "/food.png",
    date: "16-07-2010",
    cat: "Food",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "10",
    writer: "Oliver Westwood",
    writerImg: "/w4.png",
    img: "/style.png",
    date: "06-11-2023",
    cat: "Style",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "11",
    writer: "Isabella Rainier",
    writerImg: "/w5.png",
    img: "/fashion.png",
    date: "19-03-2021",
    cat: "Fashion",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "12",
    writer: "Benjamin Everhart",
    writerImg: "/w6.png",
    img: "/culture.png",
    date: "11-02-2023",
    cat: "Culture",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "13",
    writer: "Amelia Sterling",
    writerImg: "/w1.png",
    img: "/coding.png",
    date: "11-02-2023",
    cat: "Coding",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },

  {
    id: "14",
    writer: "Lucas Hawthorne",
    writerImg: "/w2.png",
    img: "/travel.png",
    date: "30-09-2021",
    cat: "Travel",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "15",
    writer: "Vivian Grace",
    writerImg: "/w3.png",
    img: "/food.png",
    date: "16-07-2010",
    cat: "Food",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "16",
    writer: "Oliver Westwood",
    writerImg: "/w4.png",
    img: "/style.png",
    date: "06-11-2023",
    cat: "Style",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "17",
    writer: "Isabella Rainier",
    writerImg: "/w5.png",
    img: "/fashion.png",
    date: "19-03-2021",
    cat: "Fashion",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil sit, omnis, pariatur ratione qui a reprehenderit alias asperiores nobis aliquam molestias nulla quos provident dolore saepe sunt sequi? Dolor, obcaecati officiis! Ipsa, eos rem.",
  },
  {
    id: "18",
    writer: "Benjamin Everhart",
    writerImg: "/w5.png",
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
            featured={false}
            key={item.id}
            img={item.img}
            date={item.date}
            cat={item.cat}
            title={item.title}
            desc={item.desc}
            writer={item.writer}
            writerImg={item.writerImg}
          />
        ))}
      </div>
      <div className="buttons flex items-center justify-between my-12">
        <button
          className="bg-[#C92C39] py-3 px-5 text-base text-[#fff] 
        w-[125px] hover:bg-[#9F202B] "
        >
          Previous
        </button>
        <button
          className="bg-[#C92C39] py-3 px-5 text-base text-[#fff] 
        w-[110px] hover:bg-[#9F202B] "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CardList;
