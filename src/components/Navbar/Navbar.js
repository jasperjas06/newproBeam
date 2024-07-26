import './Navbar.css';
import React, { useRef, useState } from "react";
import "@lottiefiles/lottie-player";
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import SocialIcon from "../Social Icon/SocialIcon";
import { faTwitter, faFacebookF, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Navbar({setOpen}) {
    const playerRef = useRef(null);
    const [direction, setDirection] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleAnimationClick = () => {
        const player = playerRef.current;
        player.setDirection(direction);
        player.play();
        setDirection((prev) => prev === 1 ? -1 : 1);
        setShowMenu(!showMenu);
    };
    console.log(setOpen);

    const toggleModal = () => {
        if(setOpen){
            setOpen(true);
        }
    }

    return (
        <>
            <div className="navbar z-50 bg-[#afafaf] flex px-4 lg:px-16 justify-between items-center py-4">
                <Link
                    className="lg:flex align-center flex-shrink-0"
                    to="/"
                >
                    <img
                        // className="h-20 md:h-28 lg:h-28"
                        className="h-16 md:h-24 lg:h-28"
                        alt="Beamtech logo"
                        src={Logo}
                    />
                </Link>
                <ul
                    // className="gap-8 h-full hidden lg:flex lg:flex-1 lg:justify-center lg:items-center"
                    className="hidden lg:flex lg:flex-1 lg:justify-center lg:items-center gap-8"
                >
                    <li
                        // className="nav-item text-secondary text-lg font-semibold"
                        className="nav-item text-secondary text-base md:text-lg font-semibold"
                    >
                    <a className='hover:text-[#cb2139] transition-colors duration-300 ease-out' href='/About'>About</a>
                        {/* <Link className='hover:text-[#cb2139] transition-colors duration-300 ease-out'  to="Home.js#About">About</Link> */}
                    </li>
                    <li
                        // className="nav-item text-secondary text-lg font-semibold h-20 flex items-center"
                        className="nav-item text-secondary text-base md:text-lg font-semibold"
                    >
                        <a className='hover:text-[#cb2139] transition-colors duration-300 ease-out' href='/solutions'>Solutions</a>
                    </li>
                    <li
                        // className="nav-item text-secondary text-lg font-semibold h-20 flex items-center"
                        className="nav-item text-secondary text-base md:text-lg font-semibold"
                    >
                        <Link className='hover:text-[#cb2139] transition-colors duration-300 ease-out' to="/process">Process</Link>
                    </li>
                    <li
                        // className="nav-item text-secondary text-lg font-semibold h-20 flex items-center"
                        className="nav-item text-secondary text-base md:text-lg font-semibold"
                    >
                        <Link className='hover:text-[#cb2139] transition-colors duration-300 ease-out' to="/work">Work</Link>
                    </li>
                    <li
                        // className="nav-item text-secondary text-lg font-semibold h-20 flex items-center"
                        className="nav-item text-secondary text-base md:text-lg font-semibold"
                    >
                        <Link className='hover:text-[#cb2139] transition-colors duration-300 ease-out' to="/contact">Contact</Link>
                    </li>
                </ul>
                <div
                    // className="flex items-center gap-4 lg:gap-8 flex-shrink-0"
                    className="flex items-center gap-2 md:gap-4 lg:gap-8 flex-shrink-0"
                >
                    <button
                        id="speakWithUsButton"
                        // className="speak-with-us-button text-[12px] text-white h-[32px] py-[7px] px-[17px] md:text-[18px] md:h-[48px] md:py-[12px] md:px-[30px] rounded-[50px] flex justify-center items-center"
                        className="speak-with-us-button text-xs md:text-base text-white py-2 px-4 md:py-3 md:px-6 rounded-full flex justify-center items-center"
                        type="button"
                        onClick={toggleModal}
                    >
                        <span>Speak With Us</span>
                    </button>
                    <button
                        id="hambutton"
                        // className="lg:hidden cursor-pointer flex items-center justify-center h-14 w-14 md:h-20 md:w-20"
                        className="lg:hidden cursor-pointer flex items-center justify-center h-10 w-10 md:h-14 md:w-14"
                        type="button"
                        title="Menu"
                        onClick={handleAnimationClick}
                    >
                        <lottie-player
                            ref={playerRef}
                            src="/hamburger.json"
                            speed={3}
                            style={{ position: 'relative', bottom: '7px' }}
                        ></lottie-player>
                    </button>
                </div>
            </div>

            <div>
                {showMenu && (
                    // className="fixed menu-bg inset-0 top-[6.2rem] z-50 lg:hidden"
                    <div className="fixed menu-bg inset-0 top-[5.8rem] z-50 lg:hidden">
                        {/* <div className="absolute pt-10 top-0 left-0 w-full h-full flex justify-center"> */}
                        <div className="absolute w-full h-full flex flex-col items-center p-4 transition duration-500">
                            {/* <div className='absolute h-2/4 left-20 top-32'>
                                <lottie-player
                                    src="/construction-2.json"
                                    autoplay
                                    loop
                                ></lottie-player>
                            </div>

                            <div className='absolute h-4/5 right-20 bottom-5'>
                                <lottie-player
                                    src="/construction-1.json"
                                    autoplay
                                    loop
                                ></lottie-player>
                            </div> */}
                            {/* <ul className="text-3xl text-[#222d37] w-full space-y-6"> */}
                            <ul className="text-2xl md:text-3xl text-[#222d37] w-full space-y-4 md:space-y-6 my-3">
                                <li className="py-2 w-full text-center">
                                    <Link
                                        className='font-semibold hover:text-[#cb2139] transition-colors duration-300 ease-out'
                                        to="/about">About
                                    </Link>
                                </li>
                                <li className="py-2 w-full text-center">
                                    <Link
                                        className='font-semibold hover:text-[#cb2139] transition-colors duration-300 ease-out'
                                        to="/solutions">Solutions
                                    </Link>
                                </li>
                                <li className="py-2 w-full text-center">
                                    <Link
                                        className='font-semibold hover:text-[#cb2139] transition-colors duration-300 ease-out'
                                        to="/process">Process
                                    </Link>
                                </li>
                                <li className="py-2 w-full text-center">
                                    <Link
                                        className='font-semibold hover:text-[#cb2139] transition-colors duration-300 ease-out'
                                        to="/work">Work
                                    </Link>
                                </li>
                                <li className="py-2 w-full text-center">
                                    <Link
                                        className='font-semibold hover:text-[#cb2139] transition-colors duration-300 ease-out'
                                        to="/contact">Contact
                                    </Link>
                                </li>
                            </ul>
                            <div className="flex space-x-3 md:space-x-5 mt-5 md:mt-10">
                                <SocialIcon icon={faTwitter} link="https://twitter.com" />
                                <SocialIcon icon={faFacebookF} link="https://facebook.com" />
                                <SocialIcon icon={faInstagram} link="https://www.instagram.com/beam.tech?igsh=eWRrMjl2aWprbnJ5" />
                                <SocialIcon icon={faLinkedinIn} link="https://linkedin.com" />
                                <SocialIcon icon={faYoutube} link="https://youtube.com" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
