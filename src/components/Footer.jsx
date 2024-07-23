import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { LuCopyright } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io5";

function Footer(){

    return(
        <div className="footer">
            
            <h1> <LuCopyright/> Muhammad Haris</h1>
            <div className="footer-links">
                <FaLinkedin className="footer-logo"/>
                <IoLogoGithub className="footer-logo rightLogo"/>
            </div>
        </div>    
    )
}

export default Footer;