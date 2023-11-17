import React from "react";
import MenuCard from "./MenuCard";

const MenuPosts = ({ data, hasImage }) => {
  return (
    <div className="flex flex-col items-start gap-6">
      {data.slice(0, 4).map((item) => (
        <MenuCard
          key={item.id}
          cat={item.cat}
          bgColor={item.bgColor}
          hasImage={hasImage}
          img={item.img}
          date={item.date}
          title={item.title}
          desc={item.desc}
          writer={item.write}
          writerImg={item.writerImg}
        />
      ))}
    </div>
  );
};

export default MenuPosts;
