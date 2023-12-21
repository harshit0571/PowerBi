'use client';

import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Link from 'next/link';

export default function HeroSection() {
    const [text] = useTypewriter({
      words: ['From Projects to Placement']
      });
    return (
      <div className="max-w-full grid grid-cols-[1fr_1fr] mt-[100px] mb-5 mx-2.5">
        <div className="flex flex-col justify-evenly items-center px-10 py-0">
          <div className="w-full">
          <div className="relative text-5xl font-bold text-[color:var(--primary-color)] mx-0 my-5">
            <div className="text-[white] invisible">
              From Projects to Placement
            </div>
            <div className="absolute left-0 top-0">
              <span>{ text }</span><span><Cursor /></span>
              </div>
            </div>
            <div className="relative text-5xl font-bold my-5 text-[color:var(--primary-color)] mx-0 text-[3.5rem]">With Placed</div>
            <div className="text-[1.7rem]">
              Pay only after you are placed above 5LP</div>
          </div>
          <div className="w-full flex">
            <Link href="/program" className="bg-[rgb(0,107,172)] text-[white] text-2xl duration-[0.5s] no-underline px-5 py-2.5 rounded-[5px] border-[none] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[3px_3px_#444] hover:text-[#eee]">Explore Programs</Link>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <img src='/Images/data-science.png' className="w-[70%] min-w-[200px]" alt="Data Science Logo" />
        </div>
      </div>
    );
  }