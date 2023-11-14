import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="px-8 pb-4 flex items-center justify-between md:px-32 xl:px-64 dark:bg-[#0f172a] dark:text-[#ddd]">
      <div className=" w-[70%]">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center rounded-full overflow-hidden w-[40px] h-[40px]">
            <img className="object-cover w-full h-full" src="/pfp.png" alt="" />
          </div>
          <span>Smagcap</span>
        </div>
        <div className=" line-clamp-3 text-[#626262] dark:[#a6a6a6] text-sm pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aut in
          eligendi perferendis suscipit tempora dolorem vitae voluptatum quo
          reprehenderit at dolore, repellat quia distinctio.
        </div>
        <div className="md:flex hidden gap-[10px] items-center w-[250px]">
          <Image
            className=" cursor-pointer"
            src="/facebook.png"
            alt=""
            height={20}
            width={20}
          />
          <Image
            className=" cursor-pointer"
            src="/instagram.png"
            alt=""
            height={20}
            width={20}
          />
          <Image
            className=" cursor-pointer"
            src="/tiktok.png"
            alt=""
            height={20}
            width={20}
          />
          <Image
            className=" cursor-pointer"
            src="/youtube.png"
            alt=""
            height={20}
            width={20}
          />
        </div>
      </div>
      <div className=" w-[30%] "></div>
    </div>
  );
};

export default Footer;
