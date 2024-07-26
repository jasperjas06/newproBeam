import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import building1 from "../assets/images/p1.jpeg";
import building2 from "../assets/images/p2.jpeg";
import building3 from "../assets/images/p3.jpeg";
import building4 from "../assets/images/p4.jpeg";
import "../styles/index.css";

const imageUrls = [building1, building2, building3, building4];

export default function Work({setOpen,sepratePage=true}) {
    const [bgImage, setBgImage] = useState(imageUrls[0]);

    const handleImageClick = (url) => {
        setBgImage(url);
    }

    return (
        <>
            {sepratePage && <Navbar setOpen={setOpen} />}
            {/* className="page mt-20" */}
            <div className="page mt-20 bg-cover bg-center min-h-screen"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                {/* className="pt-14 px-14 text-black" */}
                <div className="pt-14 px-5 md:px-14 text-black">
                    {/* className="text-6xl font-bold" */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{color:"white"}}>Our Projects</h1>
                    {/* className="pt-10 max-w-lg text-2xl" */}
                    <p className="pt-6 md:pt-10 max-w-full md:max-w-lg text-xl md:text-xl lg:text-2xl" style={{color:"white", fontWeight:300, fontSize:"24px", lineHeight:"28px"}}>
                        From a couple to a large Indian family, we have houses built with emotions for everyone.
                    </p>
                </div>
                {/* className="relative top-28 flex justify-end" */}
                <div className="relative mt-14 md:mt-28 flex flex-wrap justify-center md:justify-end gap-4 md:gap-5 p-4">
                    {imageUrls.map((url, index) => (
                        <div
                            key={index}
                            // className="bg-cover bg-center h-36 w-32 mr-5 rounded-3xl cursor-pointer"
                            className="bg-cover bg-center h-24 w-20 md:h-36 md:w-32 rounded-3xl cursor-pointer transition-transform transform"
                            style={{ backgroundImage: `url(${url})` }}
                            onClick={() => handleImageClick(url)}
                        ></div>
                    ))}
                </div>
            </div>
        </>
    );
}