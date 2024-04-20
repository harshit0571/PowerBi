"use client";

import Link from "next/link";
import Image from "next/image";
import AppLogo from "@/app/ui/logo";
import { useState, useEffect } from "react";
import clsx from "clsx";

export default function NavMenu({ login }: { login: string }) {
  const [isOpen, setOpen] = useState(false);
  const [user, setUser] = useState("");
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1000) setOpen(false);
    });
    if (localStorage.getItem("user") !== null) {
      let str = localStorage.getItem("user");
      if (str == null) str = "";
      setUser(str);
    }
  });
  const handleLogOut = () => {
    localStorage.removeItem("user");
    location.reload();
    setUser("");
  };
  return (
    <div>
      <div className="fixed bg-white flex items-center justify-between px-2 sm:px-11 w-full top-0 left-0 right-0 z-50">
        <AppLogo />
        <div className="flex items-center">
          <div className="hidden min-[1000px]:flex items-center flex-row w-fit">
            <Link
              href="/"
              className="text-md font-bold hover:text-[#444] px-2 uppercase min-[1030px]:px-4"
            >
              Home
            </Link>
            <Link
              href="/program"
              className="text-md font-bold hover:text-[#444] px-2 uppercase min-[1030px]:px-4"
            >
              Programs
            </Link>
            <Link
              href="/team"
              className="text-md font-bold hover:text-[#444] px-2 uppercase min-[1030px]:px-4"
            >
              Meet the Team
            </Link>
            <Link
              href="/contact"
              className="text-md font-bold hover:text-[#444] px-2 uppercase min-[1030px]:px-4"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div
          className="px-2 min-[1000px]:hidden shrink-0 "
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <Image
              src="/Icons/cross.svg"
              className="w-9"
              width="50"
              height="50"
              alt="Cross"
            />
          ) : (
            <Image
              src="/Icons/menu.svg"
              className="w-9"
              width="50"
              height="50"
              alt="Cross"
            />
          )}
        </div>
        {user.length == 0 ? (
          <Link
            href="/auth/login"
            className="hidden text-md font-bold border-2 border-[#078181] text-white bg-[#078181] rounded-md min-[1000px]:flex items-center px-4 h-fit hover:bg-white hover:text-[#078181]"
          >
            Login
          </Link>
        ) : (
          <div className="hidden min-[1000px]:flex flex-row items-center w-fit">
            {/* <Link
              href="/profile"
              className="text-md font-bold border-2 border-[#078181] text-white mx-2 bg-[#078181] rounded-full flex items-center px-4  h-fit hover:bg-white hover:text-[#078181]"
            >
              Profile
            </Link> */}
            <button
              onClick={handleLogOut}
              className="text-md font-bold border-2 border-[#078181] text-white mx-2 bg-[#078181] rounded-full flex items-center px-4 h-fit hover:bg-white hover:text-[#078181]"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
      <div
        className={clsx(
          "fixed min-[1000px]:hidden h-full w-screen py-4 linear flex items-center duration-500 bg-white bg-opacity-60 backdrop-blur-xl top-10 z-40",
          { "right-full": !isOpen, "right-0": isOpen }
        )}
        onClick={() => {
          setOpen(false);
        }}
      >
        <div className="flex items-center flex-col justify-center w-full">
          <Link href="/" className="text-xl hover:text-[#444] px-4">
            Home
          </Link>
          <Link href="/program" className="text-xl hover:text-[#444] px-4">
            Program
          </Link>
          <Link href="/team" className="text-xl hover:text-[#444] px-4">
            Meet the Team
          </Link>
          <Link href="/contact" className="text-xl hover:text-[#444] px-4">
            Contact Us
          </Link>
          {user.length == 0 ? (
            <Link
              href="/auth/login"
              className="text-md my-4 font-bold border-2 border-[#078181] text-white bg-[#078181] rounded-md flex items-center px-4 h-fit hover:bg-white hover:text-[#078181]"
            >
              Login
            </Link>
          ) : (
            <div className="flex flex-col items-center w-fit">
              { /* <Link
                href="/profile"
                className="text-md font-bold border-2 border-[#078181] text-white mx-2 bg-[#078181] rounded-xl flex items-center px-4 my-1 h-fit hover:bg-white hover:text-[#078181]"
              >
                Profile
              </Link> */}
              <button
                onClick={handleLogOut}
                className="text-md font-bold border-2 border-[#078181] text-white mx-2 bg-[#078181] rounded-xl flex items-center px-4 my-1 h-fit hover:bg-white hover:text-[#078181]"
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
