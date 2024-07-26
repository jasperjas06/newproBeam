import React, {  useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar/Navbar";
import Trolley from '../assets/images/trolley.png';
import EngConstruction from "../assets/images/engineering-construction.png";
import '../styles/index.css';
import LandingPage from "./LandingPage";
import Solutions from "./Solutions";
import Service from "./Service";
import Cultuer from "./Cultuer";
import Process from "./Process";
import Work from "./Work";
import OurClients from "./OurClients";
import Faqs from "./Faqs";
import Contact from "./Contact";
import Consturc from "./Consturc";
import Footer from "../components/Footer/Footer";
import SpeakWithUs from "../components/SpeakWithUs/SpeakWithUs";

gsap.registerPlugin(ScrollTrigger);

export default function Home({setOpen,open}) {
    const containerRef = useRef(null);

    console.log(setOpen);

    return (
        <>
            <div className="main-container">
                <Navbar setOpen={setOpen} />
                <div id="About">
                    <LandingPage />
                </div>
                <div id="Solution">
                    <Solutions sepratePage={false} />
                </div>
                <div>
                    <Service sepratePage={false} />
                </div>
                <br/>
                <br/>
                <Cultuer />
                <Process sepratePage={false} />
                <Work sepratePage={false}  />
                <OurClients />
                <div>
                    <Faqs />
                </div>
                <div>
                    <Contact  sepratePage={false}  />
                </div>
                <Consturc />
                <Footer />
            </div>
        </>
    );
}