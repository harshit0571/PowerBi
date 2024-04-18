'use client'
import {useContext, useState, useEffect} from 'react';
import CourseContext from '@/app/courses/contexts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SideBar from '@/app/ui/lecture/sidebar';
import clsx from 'clsx';

export default function Layout({children, params} : {
    children: JSX.Element,
    params: any
}) {
    const course:any = useContext(CourseContext);
    const [sideOpen, setOpen] = useState(true);
    return(<div className="duration-300 w-full box-border">
        <SideBar course={course} link={"/courses/" + params.slug + "/lecture/"} isOpen={sideOpen} setOpen={setOpen}/>
        <div className={clsx("duration-300 w-full", {"pl-80" : sideOpen, "pl-11" : !sideOpen})}>{children}</div>
    </div>)
}