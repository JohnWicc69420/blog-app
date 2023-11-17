import React from "react";
import MenuPosts from "./MenuPosts";
import MenuCategories from "./MenuCategories";

const categories = [
  {
    id: "1",
    cat: "Food",
    src: "/food.png",
    bgColor: "bg-[#F0755D]",
    lightBgColor: "bg-[#E0F1FD]",
  },
  {
    id: "2",
    cat: "Travel",
    src: "/travel.png",
    bgColor: "bg-[#F4AB5C]",
    lightBgColor: "bg-[#F6E7F1]",
  },
  {
    id: "3",
    cat: "Style",
    src: "/style.png",
    bgColor: "bg-[#EE7885]",
    lightBgColor: "bg-[#E4EEE5]",
  },
  {
    id: "4",
    cat: "Coding",
    src: "/coding.png",
    bgColor: "bg-[#6559E0]",
    lightBgColor: "bg-[#FCE1DA]",
  },
  {
    id: "5",
    cat: "Fashion",
    src: "/fashion.png",
    bgColor: "bg-[#F0755D]",
    lightBgColor: "bg-[#FDE8D1]",
  },
  {
    id: "6",
    cat: "Culture",
    src: "/culture.png",
    bgColor: "bg-[#6559E0]",
    lightBgColor: "bg-[#DDDDFD]",
  },
];

const Menu = () => {
  return (
    <div>
      <h2 className="text-[#626262] dark:text-[#a6a6a6]">What's Hot</h2>
      <h1 className="text-3xl font-bold mb-8 pt-1">Most Popular</h1>
      <div className="xl:mb-16 mb-8">
        <MenuPosts categories={categories} hasImage={false} />
      </div>
      <h2 className="text-[#626262] dark:text-[#a6a6a6]"> Discover by topic</h2>
      <h1 className="text-3xl font-bold mb-8 pt-1">Categories</h1>
      <div className="xl:mb-16 mb-8">
        <MenuCategories categories={categories} />
      </div>
      <h2 className="text-[#626262] dark:text-[#a6a6a6]">
        Chosen by the editor
      </h2>
      <h1 className="text-3xl font-bold mb-8 pt-1">Editor's Pick</h1>
      <div className="xl:pb-16 pb-8">
        <MenuPosts categories={categories} hasImage={true} />
      </div>
    </div>
  );
};

export default Menu;
