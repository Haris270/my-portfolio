import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return(
        <>
        <nav className='top-nav'>
            <HashLink to={"/#top"} className='nameLogo'>
                MyName
            </HashLink>  

            <div className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? <FaTimes className='ham-menu'/> : <IoMdMenu className='ham-menu'/>}
            </div>


            <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>

                <ul className='nav-links'>
                    <li><HashLink to={'/#project'} onClick={toggleMenu} className='menu-options'>Projects</HashLink></li>
    
                    <li><Link to={'jobs/'} onClick={toggleMenu} className='menu-options'>Blog</Link></li>
  
                    <li><Link to={'contact/'} onClick={toggleMenu} className='menu-options'>Contact</Link></li>
                </ul>

            </div>

        </nav>
        </>
    );
}

export default Navbar;