import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";

export default function SideBar({
  course,
  link,
  isOpen,
  setOpen,
}: {
  course: any;
  link: string;
  setOpen: any;
  isOpen: any;
}) {
  if (Object.keys(course).length === 0) {
    return <div className="w-0"></div>;
  }
  const path = usePathname();
  return (
    <div
      className={clsx(
        "w-80 fixed bottom-0 top-0 border-r-2 border-r-[#078181] overflow-x-visible overflow-y-scroll no-scrollbar min-h-fit h-screen shadow-lg duration-300 group/top",
        { "left-0": isOpen, "left-11 -translate-x-80": !isOpen }
      )}
    >
      
      <div className="sticky z-50 top-0 right-0 left-0 w-full bg-[#078181] px-6 pb-4 pt-11 duration-300">
      <Link href="/" className="absolute top-[-100%] group-hover/top:top-0 left-0 z-50 font-bold text-md block w-full text-center bg-slate-200 hover:bg-slate-300 duration-500 hover:text-slate-500">
        <span className="pl-1 group-hover:pl-0 group-hover:pr-1 duration-300">&lt;</span> Back to Home</Link>
        <span className="font-bold text-white text-2xl">{course.title}</span>
        <button
          className={clsx(
            "absolute right-1 -translate-y-1.2 w-8 text-5xl text-white h-8 flex justify-center items-center duration-300 top-1/2 font-light",
            { "rotate-180": isOpen }
          )}
          onClick={() => setOpen(!isOpen)}
        >
          &raquo;
        </button>
      </div>
      <div className="pb-24">
        {course.modules.map((item: any, ind: number) => (
          <Permodule
            key={ind}
            module={item}
            link={link + (ind + 1) + "/"}
            path={path}
          />
        ))}
      </div>
    </div>
  );
}

function Permodule({
  module,
  link,
  path,
}: {
  module: any;
  link: string;
  path: string;
}) {
  const [isOpen, setOpen] = useState(path.includes(link));
  return (
    <div className="border-[0.4px] border-slate-200">
      <div className="flex bg-white">
        <div
          className={clsx(
            "h-4 w-4 rounded-full border-2 my-2 mx-2 duration-300",
            { "border-[--pc]": path.includes(link) }
          )}
        ></div>
        <div className="my-1 text-xl">
          <Link
            className={clsx("w-full block", {
              "text-[--pc]": path.includes(link),
            })}
            href={link + "videos/1"}
          >
            {module.title}
          </Link>
          <div className="my-1 flex justify-center items-center">
            <button
              className={clsx(
                "bg-[--pc] flex justify-center text-white items-center p-2 text-center text-sm cursor-default rounded-full w-4 h-4 duration-300",
                { "rotate-90": isOpen, "-rotate-90": !isOpen }
              )}
              onClick={() => setOpen(!isOpen)}
            >
              <span>&lt;</span>
            </button>
            <span className="mx-4 text-xs">{module.videos.length} Videos</span>
            <span className="text-xs">
              {module.assignments.length} Assignments
            </span>
          </div>
        </div>
      </div>
      <div className="overflow-hidden relative">
        <div
          className={clsx("w-full bg-slate-200 duration-300 py-2 box-border", {
            "mt-[-100%] hidden": !isOpen,
            "mt-0": isOpen,
          })}
        >
          {module.videos.map((item: any, ind: number) => {
            let linkHere = link + "videos/" + (ind + 1);
            return <VidLink title={item.title} link={linkHere} path={path} />;
          })}
          {module.assignments.map((item: any, ind: number) => {
            let linkHere = link + "assignment/" + (ind + 1);
            return (
              <AssignLink title={item.title} link={linkHere} path={path} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function VidLink({
  title,
  link,
  path,
}: {
  title: any;
  link: string;
  path: string;
}) {
  return (
    <Link
      href={link}
      className="w-full flex justify-start items-center group py-2 px-4"
    >
      <Image
        className={clsx("w-6 h-6 group-hover:scale-110 duration-75", {
          "brightness-50": !path.includes(link),
        })}
        src="/Icons/play-video.svg"
        width="50"
        height="50"
        alt="icon"
      />
      <span
        className={clsx("text-sm mx-2", { "text-[--pc]": path.includes(link) })}
      >
        {title}
      </span>
    </Link>
  );
}

function AssignLink({
  title,
  link,
  path,
}: {
  title: any;
  link: string;
  path: string;
}) {
  return (
    <Link
      href={link}
      className="w-full flex justify-start items-center group py-2 px-4"
    >
      <Image
        className={clsx("w-6 h-6 group-hover:scale-110 duration-75", {
          "brightness-50": !path.includes(link),
        })}
        src="/Icons/assignment.svg"
        width="50"
        height="50"
        alt="icon"
      />
      <span
        className={clsx("text-sm mx-2", { "text-[--pc]": path.includes(link) })}
      >
        {title}
      </span>
    </Link>
  );
}
