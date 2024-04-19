'use client'
import { useState, useRef } from 'react';
import Form1 from './registerForm1.js';
import Form2 from './registerForm2.js';
import {isValid, isSame } from "./passWordValid.js";
import clsx from 'clsx';
import axios from 'axios';
import {apiLink} from "@/app/api";

export default function Register() {
    const [formData, setFormData] = useState({
        "username": "",
        "name": "",
        "email": "",
        "password": ""
    });
    const [finalStep, setFinal] = useState(false);
    const [resMessage, setResMessage] = useState("");
    const [isLoading, setLoading] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [validShow, setValidShow] = useState(false);
    const [confShow, setConfShow] = useState(false);
    const passRef = useRef(null);
    const userRef = useRef(null);
    const nameRef = useRef(null);
    const mailRef = useRef(null);
    const pass2Ref = useRef(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isValid(formData.password)) {
            setResMessage("Password not valid");
            passRef.current.focus();
            return;
        }
        if (!isSame(formData.password, confirmPass)) {
            pass2Ref.current.focus();
            setConfShow(true);
            return;
        }
        setLoading(true);
        setResMessage("");
        userRef.current.toggleAttribute("disabled", true);
        passRef.current.toggleAttribute("disabled", true);
        mailRef.current.toggleAttribute("disabled", true);
        nameRef.current.toggleAttribute("disabled", true);
        pass2Ref.current.toggleAttribute("disabled", true);

        try {
            const res = await axios.post(apiLink + "/auth/register", formData);
            localStorage.setItem("user", formData.username);
            window.location.href = "/";
            setLoading(false);
        }
        catch (error) {
            userRef.current.toggleAttribute("disabled", false);
            passRef.current.toggleAttribute("disabled", false);
            mailRef.current.toggleAttribute("disabled", false);
            nameRef.current.toggleAttribute("disabled", false);
            pass2Ref.current.toggleAttribute("disabled", false);
            console.log(error);
            if (error.response == undefined) {
                setResMessage("Network Error!");

            } else {
                if (error.response.data.message === "Error registering user") {
                    setResMessage("This E-mail is already registred.");
                    setPart(1);
                    mailRef.current.focus();
                }
                else if (error.response.data.message === "User already exists.") {
                    setResMessage("This username is already taken");
                    setPart(2);
                    userRef.current.focus();
                }
            }
            setLoading(false);
        }
    }

    return (<div className="w-full overflow-hidden py-4 relative h-96 flex flex-col items-center justify-center">
        <div className="text-md text-red-700 font-bold">{resMessage}</div>
        <div className={clsx("w-full overflow-hidden grid", {
            "grid-cols-[1fr_0]": !finalStep,
            "grid-cols-[0_1fr]": finalStep
        })}>
            <Form1 formData={formData} setFinal={setFinal} nameRef={nameRef} mailRef={mailRef} handleChange={handleChange} isHidden={finalStep} />
            <Form2 formData={formData} isHidden={!finalStep} setFinal={setFinal} handleChange={handleChange} handleSubmit={handleSubmit} userRef={userRef} passRef={passRef} pass2Ref={pass2Ref} isLoading={isLoading} confirmPass={confirmPass} setConfirmPass={setConfirmPass} />
        </div>
    </div>);
}