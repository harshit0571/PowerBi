"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { apiLink } from "@/app/api";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import InputEle from "../utils/input.util.js";

export default function FormLogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [resMessage, setResMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const userRef: any = useRef(null);
  const passRef: any = useRef(null);
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setResMessage("");
    userRef.current.toggleAttribute("disabled", true);
    passRef.current.toggleAttribute("disabled", true);

    try {
      const res = await axios.post(apiLink + "/auth/login", formData);
      localStorage.setItem("user", formData.username);
      window.location.href = "/";
    } 
    catch (error) {
      setResMessage("Invalid Username or Password!!");
      userRef.current.toggleAttribute("disabled", false);
      passRef.current.toggleAttribute("disabled", false);
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <form
      className="w-full flex flex-col items-stretch justify-center md:items-center mt-11 md:px-4"
      onSubmit={handleSubmit}
    >
      <div className="text-md text-red-700 font-bold">{resMessage}</div>

      <InputEle refer={userRef} value={formData.username} type="text"
      handleChange={handleChange} name="username"/>

      <InputEle refer={passRef} value={formData.password} type="password"
      handleChange={handleChange} name="password"/>
      
      <div className="w-full my-2">
        {isLoading ? (
          <div className="w-3/5 mx-auto p-3 flex h-11 justify-center items-center rounded-xl my-2 bg-[--pc]">
            <BeatLoader
              color="white"
              loading={true}
              size={10}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <button
            className="w-3/5 mx-auto p-2 text-2xl text-white flex h-11 justify-center items-center my-2 rounded-xl bg-[--pc] hover:scale-105  font-bold duration-200"
            type="submit"
          >
            Continue
          </button>
        )}
      </div>
    </form>
  );
}