import React from "react";
import MenuPosts from "./MenuPosts";
import MenuCategories from "./MenuCategories";
import blogs from "@/utils/data";

const Menu = async () => {
  const data = await blogs();
  return (
    <div>
      <h2 className="text-[#626262] dark:text-[#a6a6a6]">What&rsquo;s Hot</h2>
      <h1 className="text-3xl font-bold mb-8 pt-1">Most Popular</h1>
      <div className="xl:mb-16 mb-8">
        <MenuPosts data={data} hasImage={false} />
      </div>
      <h2 className="text-[#626262] dark:text-[#a6a6a6]"> Discover by topic</h2>
      <h1 className="text-3xl font-bold mb-8 pt-1">Categories</h1>
      <div className="xl:mb-16 mb-8">
        <MenuCategories data={data} />
      </div>
      <h2 className="text-[#626262] dark:text-[#a6a6a6]">
        Chosen by the editor
      </h2>
      <h1 className="text-3xl font-bold mb-8 pt-1">Editor&rsquo;s Pick</h1>
      <div className="xl:pb-16 pb-8">
        <MenuPosts data={data} hasImage={true} />
      </div>
    </div>
  );
};

export default Menu;
