import React from "react";
import MenuCard from "./MenuCard";

const MenuPosts = ({ categories, hasImage }) => {
  return (
    <div className="flex flex-col items-start gap-6">
      {categories.slice(0, 4).map((item) => (
        <MenuCard
          key={item.id}
          cat={item.cat}
          bgColor={item.bgColor}
          hasImage={hasImage}
          src={item.src}
        />
      ))}
    </div>
  );
};

export default MenuPosts;
