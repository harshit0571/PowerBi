"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiLink } from "@/app/api";
import { BeatLoader } from "react-spinners";

export default function WelSec() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    selectedCourses: [],
  });
  const [isValid, setValid] = useState(true);
  useEffect(() => {
    let str = localStorage.getItem("user");
    if (str != null && str.length > 0) {
      try {
        const getData = async () => {
          const response = await axios.get(apiLink + "/user/" + str);
          setUser(response.data.user);
        };
        getData();
        console.log(user);
      } catch {
        setValid(false);
      }
    }
    else{
      setValid(false);
    }
  }, []);
  if(!isValid) {
    return (
      <div className="top-0 left-0 right-0 bottom-0 h-screen w-screen mx-auto flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold my-4">Invalid Authentication Token</h1>
        <p className="text-2xl text-[--pc]">Please         <Link href="/auth/login" className="underline">Sign In</Link>  again to continue</p>
      </div>
    );
  }
  if (user.username.length === 0) {
    return (
      <div className="top-0 left-0 right-0 bottom-0 text-4xl h-screen w-screen mx-auto flex justify-center items-center">
        <BeatLoader loading={true} color="#008080" size={40} />
      </div>
    );
  }
  return (
    <div className="h-screen w-full grid grid-cols-[35%,1fr]">
      <div className="bg-[linear-gradient(180deg,#1a3c3f,#00ccc0)] relative">
        <div className="h-screen w-full overflow-hidden flex justify-center items-center">
        <div className="translate-x-1/2 bg-[radial-gradient(yellow,transparent_70%)] w-[100%] h-1/2 text-4xl"></div>
        </div>
        <div className="bg-[linear-gradient(270deg,#1a3c3f,#00ccc0)] absolute top-1/2 -translate-y-1/3 left-full w-[200%] translate-x-[-200px] flex rounded-full">
          <Image src="/Images/profile_pic_.png" className="h-full rounded-full" width="400" height="400" alt="Profile Pic" />
          <div className="pl-11 flex flex-col justify-evenly text-white">
            <h3 className="text-4xl">Profile Details</h3>
            <div className="grid grid-cols-[40%,1fr] max-w-fit">
              <div className="text-slate-200">
                <p className="pr-2">username: </p>
                <p className="pr-2">Phone Number: </p>
                <p className="pr-2">Email: </p>
                <p className="pr-2">Institution: </p>
              </div>
              <div>
                <p className="">{user.username}</p>
                <p className="">xxx</p>
                <p className="">{user.email}</p>
                <p className="">xxx</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[linear-gradient(225deg,#399d96,white,#399d96)] p-28">
        <div className="font-bold">
          <p className="text-2xl">Hello!</p>
          <h2 className="text-5xl">{user.name}</h2>
        </div>
      </div>

    </div>
  );
}
