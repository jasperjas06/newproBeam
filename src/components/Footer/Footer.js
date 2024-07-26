import React from "react"
import "./Footer.css"
import Logo from '../../assets/images/logowhite.png';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import SocialIcon from "../Social Icon/SocialIcon";
import post from "../../assets/images/post.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faPersonArrowUpFromLine } from "@fortawesome/free-solid-svg-icons";

const Footer = ()=>{

    return(
        <div>

        <div className="footerCon">
            <div className="footerWra">
                <div className="footerHeader" >
                    <img className="footerHeaderLogoImg" alt="Beamtech logo" src={Logo} /> 
                    <div className="footerHeaderIconTop" >
                        <div className="flex justify-center footerHeaderIconCon space-x-4  ">
                            <SocialIcon icon={faTwitter} link="https://twitter.com" />
                            <SocialIcon icon={faFacebookF} link="https://facebook.com" />
                            <SocialIcon icon={faInstagram} link="https://www.instagram.com/beam.tech?igsh=eWRrMjl2aWprbnJ5" />
                            <SocialIcon icon={faLinkedinIn} link="https://linkedin.com" />
                            <SocialIcon icon={faYoutube} link="https://youtube.com" />
                        </div>
                        {/* <p className="footerHeaderText" >Back to Top  <FontAwesomeIcon icon={faArrowUp} /></p> */}
                    </div>
                </div>
                <hr className="footerHr" />
                <div className="footerBody" >
                    <div className="footerTextCon" >
                        <div className="footerTextWra" >
                            <h5 className="footerTextWraHeader">Heading</h5>
                            <p className="footerTextWraText" >paragraph</p>
                            <p className="footerTextWraText" >paragraph</p>
                            <p className="footerTextWraText" >paragraph</p>
                            <p className="footerTextWraText" >paragraph</p>
                            <p className="footerTextWraText" >paragraph</p>
                            <p className="footerTextWraText" >paragraph</p>
                            <p className="footerTextWraText" >paragraph</p>
                            <p className="footerTextWraText" >paragraph</p>
                        </div>
                        <div className="footerTextWra" >
                            <h5 className="footerTextWraHeader">Heading</h5>
                            <p className="footerTextWraText" >paragraph</p>
                            <p className="footerTextWraText" >paragraph</p>
                            <p className="footerTextWraText" >paragraph</p>
                            <p className="footerTextWraText" >paragraph</p>
                            <p className="footerTextWraText" >paragraph</p>
                            <p className="footerTextWraText" >paragraph</p>
                            <p className="footerTextWraText" >paragraph</p>
                            <p className="footerTextWraText" >paragraph</p>
                        </div>
                        <div className="footerTextWra" >
                            <h5 className="footerTextWraHeader">Heading</h5>
                            <p className="footerTextWraText" >paragraph</p>
                            <p className="footerTextWraText" >paragraph</p>
                            <p className="footerTextWraText" >paragraph</p>
                            <p className="footerTextWraText" >paragraph</p>
                            <p className="footerTextWraText" >paragraph</p>
                            <p className="footerTextWraText" >paragraph</p>
                            <p className="footerTextWraText" >paragraph</p>
                            <p className="footerTextWraText" >paragraph</p>
                        </div>
                    </div>
                    <div className="footerPostImgCon" >
                        <img src={post} alt="post" className="footerPostImg" />
                    </div>
                </div>
            </div>
        </div>
                <div className="footerFooterCon" >
                    <div className="footerFooterWra" >
                        <p className="footerFooterText" >paragraph</p>
                        <p className="footerFooterText" >paragraph</p>
                        <p className="footerFooterText" >paragraph</p>
                    </div>
                </div>
        </div>
    );
}

export default Footer;