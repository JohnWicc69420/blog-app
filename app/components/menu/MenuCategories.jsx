import React from "react";
import MenuCatBox from "./MenuCatBox";

const MenuCategories = ({ data }) => {
  return (
    <div className="flex flex-wrap items-center gap-4 ">
      {data.slice(0, 6).map((item) => (
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
