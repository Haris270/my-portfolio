import React from 'react';
import hz from './images/hz-og.jpg';

import { RiTerminalFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";

function Hero(){
    return(
        <>
            <div className='container'>
                <div className='hero'>

                    <div className='main-pic'>
    
                        <FaCode className='clipart float'/>
                
                        <img src={hz}/>
                
                        <RiTerminalFill className='clipart2 float'/>
                    </div>

                    <div className='my-intro'>        
                        <p>Hi! My name is <span className='my-name'>Haris</span> <span className='emoji wiggle'>
                            &#x1f44b;</span>
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero;