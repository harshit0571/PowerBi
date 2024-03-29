'use client'

import {useState, useEffect} from 'react';
import NavMenu from "../ui/home/navbar";
import HeroSec from "../ui/program/heroSec";
import StatSec from "../ui/program/statSec";
import CurriculumSec from "../ui/program/curriSec";
import VideoSec from "../ui/program/videoSec";
import SpeakerSec from "../ui/program/SpeakerSec";
import FeatureSec from "../ui/program/featSec";
import PaymentSec from "../ui/program/paymentSec.js";
import Footer from "../ui/footer";

export default function Page() {
    // const [logged, setLogged] = useState(false);
    // useEffect(() => {
    //     if(localStorage.getItem("user") !== null) {
    //         setLogged(true);
    //     }
    // }, []);

    return(<div>
        <NavMenu login="Simran" />
        <HeroSec />
        <StatSec />
        <CurriculumSec />
        {/* <VideoSec /> */ /* Will be shown after correct video provided */}
        <SpeakerSec />
        <FeatureSec />
        <PaymentSec />
        <Footer />
    </div>);
}