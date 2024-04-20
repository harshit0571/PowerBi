'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import clsx from 'clsx';


export default function SideBar({modules}: {
    modules: []
}) {
    const [num, setNum] = useState(0);
    const [top1, setTop1] = useState("");
    const [top2, setTop2] = useState("");
    const [togg, setTogg] = useState(true);
    const path:any = usePathname();
    const modNum = parseInt(path.at(-1)) - 1;
    useEffect(() => {
        setNum(parseInt(path.at(-1))-1);
        setTop1("translate-y-["+(num*56)+"px]");
        setTop2("translate-y-["+(num*56)+"px]");
        setTogg(!togg);
    }, [path]);
    return(<div className="w-full relative">
        <div className="w-2 h-full absolute ml-5 bg-slate-300 rounded-3xl"></div>
        <div className={clsx("w-2 h-14 bg-[#078181] ml-5 absolute rounded-3xl duration-500 top-0",
         {"translate-y-0" : modNum==0, "translate-y-[56px]" : modNum==1, "translate-y-[112px]" : modNum==2, 
         "translate-y-[168px]" : modNum==3, "translate-y-[224px]" : modNum==4, "translate-y-[280px]" : modNum==5, 
         "translate-y-[336px]" : modNum==6, "translate-y-[392px]" : modNum==7, "translate-y-[448px]" : modNum==8, 
         "translate-y-[504px]" : modNum==9, "translate-y-[560px]" : modNum==10, "translate-y-[616px]" : modNum==11, 
         "translate-y-[672px]" : modNum==12, "translate-y-[728px]" : modNum==13, "translate-y-[784px]" : modNum==14})}></div>
        <div className="flex flex-col justify-center">
        {modules && modules.map((item: any, ind) => {
            return(<Link key={ind} className="relative mx-1 h-14 rounded-md text-lg transition-all duration-200  flex justify-start items-center"
             href={"./" + (ind+1)}>
            <div className="w-4 h-4 mx-3 bg-[#078181] rounded-full"></div>
                {item.title}
            </Link>)
        })}
        </div>
    </div>)
}