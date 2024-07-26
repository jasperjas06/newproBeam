import React, { useRef, useState } from 'react'
import "./SpeakWithUs.css"
import SocialIcon from '../Social Icon/SocialIcon'
import { faArrowRight, faArrowRightArrowLeft, faCalendar, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "@lottiefiles/lottie-player";
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import whatsappLogo from "../../assets/images/what.png"

const SpeakWithUs = ({setOpen}) => {

  return (
    <div className='swuCon'>
        <div className='swuWra'>
          <div className='swuHeader'>
            <FontAwesomeIcon icon={faClose} fontSize={"40px"} style={{cursor:"pointer"}} onClick={()=>setOpen(false)} />
          </div>
          <div className='swuBody' >
            <h3 className='swuText'>You bring an idea, we <span style={{color:"#CB2139"}}>make it happen!</span> </h3>
            <div className='swuComCon'>
              <div className='swuComWra'>
                <div className='swuComWraHeader' >
                  <FontAwesomeIcon icon={faCalendar} fontSize={"20px"} color='white' />
                  <p className='swuComWraHeaderText'>Schedule Meeting</p>
                </div>
                <p className='swuComWraText'>Talking business takes time. Schedule a meeting for later!</p>
                <div
                    // className="flex items-center gap-4 lg:gap-8 flex-shrink-0"
                    className="flex items-center gap-2 md:gap-4 lg:gap-8 flex-shrink-0"
                >
                    <button
                      id="speakWithUsButton"
                      // className="speak-with-us-button text-[12px] text-white h-[32px] py-[7px] px-[17px] md:text-[18px] md:h-[48px] md:py-[12px] md:px-[30px] rounded-[50px] flex justify-center items-center"
                      className="speak-with-us-button text-xs md:text-base text-white py-2 px-4 md:py-3 md:px-6 rounded-full flex justify-center items-center"
                      type="button"
                    >
                        <span className='swuComWraBtn' >Get a Slot  <FontAwesomeIcon style={{marginLeft:"5px"}} icon={faArrowRight} /></span>
                    </button>
                </div>
              </div>
              <div className='swuComWra'>
                <div className='swuComWraHeader' >
                <img src={whatsappLogo} className='swuWhatsappLogo' />
                  {/* <FontAwesomeIcon icon={faWhatsappSquare} fontSize={"20px"} color='white' /> */}
                  <p className='swuComWraHeaderText' >Quick Chat</p>
                </div>
                <p className='swuComWraText'>Let's cut to the chase. Our business team is a text away!</p>
                <div
                    // className="flex items-center gap-4 lg:gap-8 flex-shrink-0"
                    className="flex items-center gap-2 md:gap-4 lg:gap-8 flex-shrink-0"
                >
                    <button
                      id="speakWithUsButton"
                      // className="speak-with-us-button text-[12px] text-white h-[32px] py-[7px] px-[17px] md:text-[18px] md:h-[48px] md:py-[12px] md:px-[30px] rounded-[50px] flex justify-center items-center"
                      className="speak-with-us-button text-xs md:text-base text-white py-2 px-4 md:py-3 md:px-6 rounded-full flex justify-center items-center"
                      type="button"
                    >
                      <span className='swuComWraBtn' >Chat Now  <FontAwesomeIcon style={{marginLeft:"5px"}} icon={faArrowRight} /></span>
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SpeakWithUs