import React, { useEffect } from 'react'
import "../styles/ScrollImage.css"
import { Typography } from '@mui/material'
import Aos from "aos";
import "aos/dist/aos.css"
const Service = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div className='service-container'>
      <div className='service-box'>
        <Typography variant='h4' sx={{ fontWeight: 700, fontSize: "60px", letterSpacing: "-2%", lineHeight: "75.6px", color: "#222D37" }} className='service-title' >Our Services</Typography>
      </div>
      <div className='service-mainbox'>
        <div className='service-content'>
          {/* <Typography sx={{ fontWeight: 300, fontSize: "24px", lineHeight: "28px", color: "#222D37", wordWrap: "break-word" }}>Flawless construction powered by deep expertise.</Typography> */}
          <ul style={{listStyle:"disc",padding :"20px",fontSize: "18px", lineHeight: "28px", color: "#222D37", wordWrap: "break-word",
            fontFamily:"outfit"
          }}>
            <li><b>Planning and Design: </b> Our team of expert architects and designers harnesses the
              latest software and technology to create detailed plans and blueprints. We ensure
              compliance with local building codes, providing a solid foundation for your project.</li>
            <li><b>
              Foundation and Structure: </b> BeamTech prioritizes robust foundations and structures.
              Using advanced techniques and materials, we prepare sites, lay foundations, and
              construct structural frames for maximum stability and durability.
            </li>
            <li><b>Advanced Construction Techniques: </b> Prefabrication, modular construction, and
              sustainable practices are our specialties. High-quality materials and modern
              techniques ensure efficient, high-standard projects.
              <li><b>
                Technology Integration: </b> We leverage 3D modelling, virtual reality walkthroughs,
                smart building systems, and automation to enhance every aspect of construction.

              </li>
              <li><b>
                Interior and Exterior Finishing: </b> Our comprehensive services cover electrical
                systems, plumbing, insulation, roofing, siding, and smart home integration. Every
                detail is perfected to your specifications.

              </li>
              <li><b>Inspection and Approval: </b> Rigorous inspections at every stage ensure quality and
                safety. We work closely with local authorities to obtain necessary approvals,
                guaranteeing compliance with regulatory requirements</li>
            </li>
          </ul>

        </div>
        <div className='serviceimg-container'>
          <div data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" data-aos-offset="30" data-aos-duration="1500" className='service-image-house'>
            <div className='service-rectangle' />
            <button>Houses</button>
          </div>
          <div data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" data-aos-offset="100" data-aos-duration="1500" className='service-image-bulding'>
            <div className='service-rectangle' />
            <button>construction For Business</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Service
