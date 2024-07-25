import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { LuCopyright } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Footer(){

    return(
        <div className="footer">
            
            <h1> <LuCopyright/> Muhammad Haris</h1>
            <div className="footer-links">
                <Link to={"https://www.linkedin.com/in/muhammad-haris-z/"} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="footer-logo"/>
                </Link>

                <Link to={"https://github.com/Haris270"} target="_blank" rel="noopener noreferrer">
                    <IoLogoGithub className="footer-logo rightLogo"/>
                </Link>

            </div>
        </div>    
    )
}

export default Footer;