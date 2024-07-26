import React, { useState, useEffect } from "react";
import building from "../assets/animations/building.gif"
import Navbar from "../components/Navbar/Navbar";
import ProgressBar from "../components/Progress Bar/ProgressBar"

export default function Process({setOpen,sepratePage=true}) {
    const [currentStep, setCurrentStep] = useState(1);

    useEffect(() => {
        const totalSeconds = 6;
        const intervalTime = (6 / totalSeconds) * 1000;

        const interval = setInterval(() => {
            setCurrentStep(prev => (prev < 6 ? prev + 1 : 1));
        }, intervalTime);

        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            {sepratePage && <Navbar setOpen={setOpen} />}
            {/* className="px-14 py-10 mt-20 w-screen" */}
            <section className="px-6 py-8 mt-20 md:px-14 md:py-10 md:mt-20 " style={{width:"100%"}} >
                {/* className="text-5xl" */}
                <div className="text-3xl md:text-5xl">
                    {/* className="py-3 font-bold" */}
                    <h1 className="py-2 md:py-3 font-bold">How it
                        <span style={{ color: '#cb2139' }}> Works?</span>
                    </h1>
                </div>
                {/* className="text-2xl w-[490px] pt-5" */}
                <div className="process-box">
                <p >
                    Our house construction steps are simple and easy to understand: Plan - Build - Track - Settle in.
                </p>
                    
                </div>
                <div className="process-bar">
                <ProgressBar  currentStep={currentStep} />

                </div>
                <div className="flex justify-center h-96 w-auto">
                    {/* className="pt-16" */}
                    <img
                        src={building}
                        alt="Building Construction"
                        className="pt-8 md:pt-16 w-fit mx-auto"
                    />
                </div>
                <div className="flex justify-center">
                    {/* className="w-2/3 pt-16 text-2xl text-center" */}
                    <p className="w-full md:w-2/3 pt-8 md:pt-16 text-lg md:text-2xl text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin dui vitae mauris mattis, ut tincidunt nunc hendrerit. Morbi viverra, augue sed hendrerit vehicula, tellus felis tempus elit, id feugiat augue leo eu arcu.
                    </p>
                </div>
            </section>
        </div>
    );
}