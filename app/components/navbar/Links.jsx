"use client";

import { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Links = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();
  return (
    <>
      <div className="lg:flex hidden gap-[10px] items-center">
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        {status === "unauthenticated" ? (
          <Link href="/">Login</Link>
        ) : (
          ((<Link href="/">Write</Link>),
          (<span onClick={signOut}>Logout</span>))
        )}
      </div>
      {open ? (
        <div
          className=" text-xl lg:hidden cursor-pointer"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <AiOutlineClose />
        </div>
      ) : (
        <div
          className=" text-xl lg:hidden cursor-pointer"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <GiHamburgerMenu />
        </div>
      )}

      {open && (
        <div className="lg:hidden w-full absolute right-0 left-0 md:top-[200px] top-16 flex flex-col items-center font-semibold text-2xl gap-7">
          <Link href="/">Homepage</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
          {status === "unauthenticated" ? (
            <Link href="/">Login</Link>
          ) : (
            ((<Link href="/">Write</Link>),
            (<span onClick={signOut}>Logout</span>))
          )}
        </div>
      )}
    </>
  );
};

export default Links;
