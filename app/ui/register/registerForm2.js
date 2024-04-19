'use client'

import InputEle from '../utils/input.util';
import BeatLoader from 'react-spinners/BeatLoader';
import {ValidShow, ConfirmShow} from './passWordValid.js';
import { useState, useRef } from 'react';
import clsx from 'clsx';

export default function Form2(
    {
        formData, setFinal, userRef, passRef, pass2Ref, handleChange, handleSubmit, isHidden, isLoading, confirmPass, setConfirmPass
    }
){
    const handleConfirm = (e) => {
        setConfirmPass(e.target.value);
    }

    return(<form className={clsx("w-full flex flex-col items-stretch justify-center duration-300", {
        "opacity-0 translate-x-full" : isHidden
    })} onSubmit={handleSubmit} >
        <InputEle refer={userRef} value={formData.username} handleChange={handleChange} type="text" name="username"/>
        <InputEle refer={passRef} value={formData.password} handleChange={handleChange} type="password" name="password"/>
        <InputEle refer={pass2Ref} value={confirmPass} handleChange={handleConfirm} type="password" name="password2"/>
        { isLoading? 
        <div className="w-full p-3 flex h-11 justify-center items-center rounded-xl my-2 bg-[#289492]"><BeatLoader color="white" loading= {true} size={10} aria-label="Loading Spinner" data-testid="loader"/></div>
        :<div className="flex items-center gap-2">
            <button className="text-white w-fit px-2 text-2xl h-11 rounded-xl bg-[#1e4847] hover:brightness-150 font-bold duration-200" onClick={() => setFinal(false)} type="button">&lt;</button>
            <button className="w-full p-2 text-xl text-white flex h-11 justify-center items-center my-2 rounded-xl bg-[#1e4847] hover:brightness-150 font-bold duration-200" type="submit">Continue</button></div>
        }
        </form>);
}