import React, { useState } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import "../styles/ScrollImage.css";
import { Box, Typography } from '@mui/material';
import home from '../assets/images/home-img.svg';
const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const LandingPage = ({ sepratePage }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const secondDivMiddle = windowHeight;
  const isSecondDivPastMiddle = scrollPosition >= secondDivMiddle;
  const firstDivPosition = isSecondDivPastMiddle ? scrollPosition - secondDivMiddle : 0;
  const thirdDivPosition = isSecondDivPastMiddle ? secondDivMiddle : scrollPosition;

  return (
    <div className="scroll-container">
    
      <div
        className="scroll-content first"
        style={{
          transform: `translateX(${firstDivPosition}px)`,
          // opacity: scrollPosition < window.innerHeight / 2 ? 1 : 0,
        }}
      >
        <Typography variant='h2' sx={{ fontWeight: "bold" }}>
          Construct Your Dream
        </Typography>
        <img src={home} alt=''/>
        <Typography variant='h2' sx={{ color: "red", fontWeight: "bold" }}>
          Home
        </Typography>
        <Typography>
          Step Into the Home You've Always dreamed
        </Typography>
        <Typography>
          Of, Built Into The Highest Standard Of
        </Typography>
        <Typography>
          Quality
        </Typography>
      </div>
      
      <div
        // className="scroll-image"
        style={{ transform: `translateX(${scrollPosition / 3}px)` }}
      />
      <img style={{ transform: `translateX(${scrollPosition / 3}px)` }} className="scroll-image" src={require("../assets/images/trally.png")} alt='img' />
      <div
        className="scroll-content third"
        style={{ transform: `translateX(${scrollPosition / 2}px)` }}
      // style={{ transform: `translateX(${scrollPosition / 2}px)` }}
      >
        <Typography variant='h2' sx={{ fontWeight: "bold" }}>
          Lorem ipsum dolor sit
        </Typography>
        <Typography variant='h2' sx={{ fontWeight: "bold" }}>
          amet consectetur.
        </Typography>
        <div className='counter-box'>
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div className='circle-counter'>
              <center>
                <p>45K+</p>
              </center>
              <br />
              <br />
            </div>
            <h4 className='counter-lable'>Home</h4>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div className='circle-counter'>
              <center>
                <p>470+</p>
              </center>
              <br />
              <br />
            </div>
            <h4 className='counter-lable'>Quality Checks</h4>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default LandingPage
