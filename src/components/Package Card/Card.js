import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Building from "../../assets/images/building-1.jpg";
import Icon from "../../assets/images/icon.png";

export default function Card({ hoverText, packageDetails }) {
    return (
        <>
            {/* className="clipped-container p-2" */}
            <div className="clipped-container p-2 ">
                <img
                    src={Building}
                    alt="Example Building"
                    // className="clipped-img"
                    className="clipped-img object-cover"
                />
                {/* className="overlay-logo" */}
                <div className="overlay-logo">
                    <img src={Icon} alt="Logo" />
                </div>
                <div className="overlay-text absolute inset-0 flex justify-center">
                    <p className="text-white text-center relative top-28 text-4xl font-semibold">{hoverText}</p>
                </div>
                <div className="flex justify-center py-6 relative z-10">
                    <Link
                        to="/package"
                        state={{ packageDetails }}
                        className="cursor-pointer px-4 py-2 text-white submit-btn rounded-full text-lg"
                    >
                        <span className="flex items-center">Learn More <FontAwesomeIcon icon={faArrowRight} className="ms-2" /></span>
                    </Link>
                </div>
            </div >
        </>
    );
}