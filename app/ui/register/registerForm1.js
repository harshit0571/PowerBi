'use client'

import InputEle from '../utils/input.util';
import BeatLoader from 'react-spinners/BeatLoader';
import { useState } from 'react';
import clsx from 'clsx';

export default function Form1(
    {
        formData, setFinal, nameRef, mailRef, handleChange, isHidden
    }
){
    const [isLoading, setLoading] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setTimeout(() => {
                setFinal(true);
            }, 250);
        }, 1000);
    }

    return(<form className={clsx("w-full flex flex-col items-stretch overflow-hidden justify-center duration-300", {
        "opacity-0 -translate-x-full" : isHidden
    })} onSubmit={handleSubmit} >
        <InputEle refer={nameRef} value={formData.name} handleChange={handleChange} type="text" name="name"/>
        <InputEle refer={mailRef} value={formData.email} handleChange={handleChange} type="email" name="email"/>
        { isLoading? 
        <div className="w-full p-3 flex h-11 justify-center items-center rounded-xl my-2 bg-[#289492]"><BeatLoader color="white" loading= {true} size={10} aria-label="Loading Spinner" data-testid="loader"/></div>
        :<div className="w-full">
            <button className="w-full p-2 text-xl text-white flex h-11 justify-center items-center my-2 rounded-xl bg-[#1e4847] hover:brightness-150 font-bold duration-200" type="submit">Next</button></div>
        }
        </form>);
}