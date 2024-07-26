import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "../styles/index.css";
import Card from "../components/Package Card/Card";
import Aos from "aos";
import "aos/dist/aos.css";
import { Container, Typography } from "@mui/material";

export default function Solutions({ setOpen, sepratePage = true }) {
  const [scrolled, setScrolled] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setScrolled(scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getAnimationStyle = (index) => {
    const delay = index * 100; // Adjust this value to control the delay
    const position = scrolled - delay;
    const screenHeight = window.innerHeight;
    const threshold = screenHeight / 2;

    if (position >= threshold) {
      return { transform: `translateY(-${threshold}px)` };
    } else if (position >= 0) {
      return { transform: `translateY(-${position}px)` };
    } else {
      return { transform: "translateY(0)" };
    }
  };
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      {sepratePage && <Navbar setOpen={setOpen} />}
      {/* className="py-12 px-14 mt-24" */}
      {/* <motion.div> */}
      {
        sepratePage ? (<>
          <div
          // className="solution slide-in-left"
        style={{ marginTop: "100px",marginLeft:"40px" }}
      >
        <Typography variant='h4' sx={{ fontWeight: 700, fontSize: "60px", letterSpacing: "-2%", lineHeight: "75.6px", color: "#222D37" }} className='service-title' >Our Services</Typography>
      </div>
      <br />
      <div className="package-container">
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div
            
          >
            <Card
              hoverText={
                <>
                  Basic Package
                  <br />
                  <span className="text-[#cb2139]">Rs. 1990/Sq.ft</span>
                  <br />
                  (Incl. GST)
                </>
              }
            />
          </div>

          <div
            
          >
            <Card
              hoverText={
                <>
                  Premium Package
                  <br />
                  <span className="text-[#cb2139]">Rs. 2190/Sq.ft</span>
                  <br />
                  (Incl. GST)
                </>
              }
            />
          </div>

          <div
            
          >
            <Card
              hoverText={
                <>
                  Elite Package
                  <br />
                  <span className="text-[#cb2139]">Rs. 2490/Sq.ft</span>
                  <br />
                  (Incl. GST)
                </>
              }
            />
          </div>
        </Container>
      </div>
        </>):
        (<>
          <div
        // data-aos="fade-right"
        // data-aos-offset="300"
        // data-aos-easing="ease-in-sine"
        // className="solution slide-in-left"
        style={{ marginTop: "120px" }}
      >
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold">
          Our Packages
        </h1>
      </div>
      <br />
      <div className="package-container">
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-offset="30"
            data-aos-duration="1500"
          >
            <Card
              hoverText={
                <>
                  Basic Package
                  <br />
                  <span className="text-[#cb2139]">Rs. 1990/Sq.ft</span>
                  <br />
                  (Incl. GST)
                </>
              }
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-offset="80"
            data-aos-duration="1500"
          >
            <Card
              hoverText={
                <>
                  Premium Package
                  <br />
                  <span className="text-[#cb2139]">Rs. 2190/Sq.ft</span>
                  <br />
                  (Incl. GST)
                </>
              }
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-offset="100"
            data-aos-duration="1500"
          >
            <Card
              hoverText={
                <>
                  Elite Package
                  <br />
                  <span className="text-[#cb2139]">Rs. 2490/Sq.ft</span>
                  <br />
                  (Incl. GST)
                </>
              }
            />
          </div>
        </Container>
      </div>
        </>)
      }
      
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
