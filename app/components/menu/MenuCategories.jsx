import React from "react";
import MenuCatBox from "./MenuCatBox";

const MenuCategories = ({ categories }) => {
  return (
    <div className="flex flex-wrap items-center gap-4 ">
      {categories.map((item) => (
        <MenuCatBox
          key={item.id}
          title={item.cat}
          bgColor={item.lightBgColor}
        />
      ))}
    </div>
  );
};

export default MenuCategories;
