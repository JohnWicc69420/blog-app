"use client";

import { ThemeContext } from "../context/ThemeContext";
import React, { useContext, useEffect, useState } from "react";

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return (
      <div
        className={
          theme === "light"
            ? " bg-[#FFF] text-black"
            : "bg-[#0f172a] text-[#D2D8E0]"
        }
      >
        {children}
      </div>
    );
  }
};

export default ThemeProvider;
