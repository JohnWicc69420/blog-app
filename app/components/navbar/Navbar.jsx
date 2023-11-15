"use client";

import React from "react";
import Social from "./Social";
import Links from "./Links";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`${
          theme === "dark" ? "bg-[#0f172a]" : "bg-[#FFF]"
        } h-20 w-full z-50 sticky top-0 right-0 px-8 md:px-20 xl:px-40 2xl:px-60 py-4 flex items-center justify-between shadow-md`}
      >
        <Social />
        <h1 className="dark:text-[#ddd] font-bold text-2xl cursor-pointer">
          smagcap
        </h1>
        <div className="flex items-center gap-[12px]">
          <ThemeToggle />
          <Links />
        </div>
      </div>
    </>
  );
};

export default Navbar;
