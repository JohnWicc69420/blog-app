import React from "react";
import MenuCatBox from "./MenuCatBox";

const MenuCategories = ({ data }) => {
  return (
    <div className="flex flex-wrap items-center gap-4 ">
      {data.slice(0, 5).map((item) => (
        <MenuCatBox
          key={item._id}
          title={item.cat}
          bgColor={item.lightBgColor}
        />
      ))}
    </div>
  );
};

export default MenuCategories;
