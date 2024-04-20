"use client";

import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { apiLink } from "@/app/api";
import { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";

const arrList = ["lessons", "hours", "tasks"];
const arrSrc = ["/Icons/play-circle.svg", "/Icons/time.svg", "Icons/tasks.svg"];

export default function CurriculumSec({ user }: { user: any }) {
  const [data, setData] = useState({ course: { modules: [] } });

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await axios.get(
          apiLink + "/course/" + "65dadfed4f55cc9363c750e4"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching courses: ", error);
      }
    };

    getCourses();
  }, []);

  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  //   username: "",
  //   selectedCourses: [],
  // });
  // useEffect(() => {
  //   let str = localStorage.getItem("user");
  //   if (str != null && str.length > 0) {
  //     try {
  //       const getData = async () => {
  //         const response = await axios.get(apiLink + "/user/" + str);
  //         setUser(response.data.user);
  //       };
  //       getData();
  //     } catch {
  //       console.log("No user with this record exists");
  //     }
  //   }
  // }, []);
  return (
    <div className="mx-auto my-8 sm:my-20 px-2 max-w-6xl">
      <div className="flex flex-col items-start">
        <h3 className="w-full text-3xl font-bold sm:font-normal text-center sm:text-left sm:text-6xl">
          What you will learn
        </h3>
        <p className="w-full my-2 sm:my-6 text-center sm:text-left px-1">
          You'll learn to create impactful data visualizations, analyze complex
          datasets, and master advanced Power BI techniques. Gain the skills to
          make data-driven decisions confidently and propel your career forward.
        </p>
      </div>
      {data.course.modules.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 my-6 mx-auto">
          {data.course.modules.map((course: any, ind) => (
            <Box
              imgSrc={`/Images/Courses_banner/banner${ind + 1}.jpg`}
              title={course.title}
              link={`/courses/65dadfed4f55cc9363c750e4/lecture/${
                ind + 1
              }/videos/${course.videos.length > 0 ? "1" : "1"}`}
              desp={course.description}
              arr={[4, 12, course.length]}
              vid={course.videos}
              asg={course.assignments}
              id={course._id}
              user={user}
            />
          ))}
        </div>
      ) : (
        <h1 className="w-full text-4xl h-60 font-bold flex justify-center items-center">
          <BeatLoader loading={true} color="#008080" size={40} />
        </h1>
      )}
    </div>
  );
}

function Box({
  imgSrc,
  title,
  desp,
  arr,
  link,
  vid,
  asg,
  id,
  user,
}: {
  imgSrc: string;
  title: string;
  desp: string;
  arr: number[];
  link: string;
  vid: any;
  asg: any;
  id: any;
  user: any;
}) {
  let arrTemp: any[] = [];
  for (let i = 0; i < 3; i++) {
    if (arr[i] > 0) {
      arrTemp.push(
        <Image
          className="grayscale"
          src={arrSrc[i]}
          width="20"
          height="20"
          alt="icons"
          key={"Image-" + i}
        />
      );
      arrTemp.push(
        <span className="text-sm ml-2 mr-4" key={"span-" + i}>
          {arr[i]} {arrList[i]}
        </span>
      );
    }
  }
  return (
    <div className="w-full rounded-2xl bg-[#f6f6f6] overflow-hidden hover:bg-[#f3f5f5] duration-500 shadow-md hover:shadow-2xl group">
      <div className="w-full h-72 md:h-80 overflow-hidden">
        <Image
          className="h-72 md:h-80 group-hover:scale-105 duration-500"
          src={imgSrc}
          height="500"
          width="1000"
          alt="course banner"
        />
      </div>
      <div className="p-2 sm:p-6 text-[#444B58]">
        <h3 className="text-4xl mb-4 text-[#444B58]">{title}</h3>
        <div className="flex w-full flex-row justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-6">
            <span className="flex gap-2">
              {" "}
              <Image
                className="grayscale"
                src={arrSrc[0]}
                width="21"
                height="21"
                alt="icons"
              />
              {vid.length} Lessons
            </span>
            <span className="flex gap-2">
              {" "}
              <Image
                className="grayscale"
                src={arrSrc[2]}
                width="20"
                height="20"
                alt="icons"
              />
              {asg.length} Assignments
            </span>
          </div>
          {"65dadfed4f55cc9363c750e4" !== user?.selectedCourses[0]?.courseId ? (
            <Link
              href={link}
              className="flex mx-4 hover:text-[#078181] hover:bg-transparent justify-center items-center py-1 px-4 font-light text-2xl text-white bg-[#078181] rounded-full duration-300 border-2 border-[#078181] hover:shadow-lg"
            >
              Start
            </Link>
          ) : (
            <Link
              href={link}
              className="flex mx-4 hover:text-[#078181] hover:bg-transparent justify-center items-center py-1 px-4 font-light text-2xl text-white bg-[#078181] rounded-full duration-300 border-2 border-[#078181] hover:shadow-lg"
            >
              Start
            </Link>
          )}
        </div>

        <div className="text-sm">{desp}</div>
      </div>
    </div>
  );
}
