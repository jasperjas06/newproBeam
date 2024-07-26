import { Container, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const About = ({setOpen,sepratePage=true}) => {
  return (
    <>
    {sepratePage && <Navbar setOpen={setOpen} />}
    <div className='About'>
    <Container>
      <Typography variant='h2' sx={{ fontWeight: "bold" }}>
          About Us
        </Typography>
        {/* <img src={home} alt=''/> */}
        <Typography>
        At BeamTech Pvt Ltd, we’re not just builders; we’re visionaries. As South India’s first tech-enabled civil construction company, we blend cutting-edge technology with time-tested 
construction practices. Our commitment to innovation and excellence drives us to deliver 
high-quality, efficient, and sustainable solutions for residential, commercial, and industrial 
projects.
        </Typography>
        <div>
          <img  className="about-image" src={require("../assets/images/trally.png")} alt='img' />
        </div>
      </Container>
    </div>
    </>
  )
}

export default About
