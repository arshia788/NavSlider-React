import React, { useEffect, useRef, useState } from 'react';


// icons
import { Icon } from 'react-icons-kit';
import {twitter} from 'react-icons-kit/fa/twitter';
import {facebook} from 'react-icons-kit/fa/facebook';
import {google} from 'react-icons-kit/fa/google';
import {reddit} from 'react-icons-kit/fa/reddit';
import {ic_menu} from 'react-icons-kit/md/ic_menu';


// logo
import logo from '../images/logo.png';



const Navbar = () => {

    const [showLink, setShowLink]=useState(false);
    console.log(showLink)

    const containerRef= useRef(null)
    const linkHeightRef= useRef(null)

    useEffect(()=>{
        const linkHeight= linkHeightRef.current.getBoundingClientRect().height;
        console.log(linkHeight)

        if(showLink){
            containerRef.current.style.height= `${linkHeight}px`
        }
        else{
            containerRef.current.style.height= '0px'
        }

    },[showLink])
   


    return (
        <nav>
            <div className='container'>
                <div className='img-holder'>
                    <button onClick={()=> setShowLink(!showLink)}>
                        <Icon icon={ic_menu} size={20}/>    
                    </button>

                    <img src={logo} alt='logo'/>

                </div>

                <div className='list-container' ref={containerRef}>
                    <ul className='list' ref={linkHeightRef}>
                        <li>home</li>
                        <li>shop</li>
                        <li>about-us</li>
                        <li>log-out</li>
                    </ul>
                </div>

                <div className='icons'>
                    <span>
                        <Icon icon={google} size={20}/>
                    </span>

                    <span>
                        <Icon icon={twitter} size={20}/>
                    </span>

                    <span>
                        <Icon icon={facebook} size={20}/>
                    </span>

                    <span>
                        <Icon icon={reddit} size={20}/>
                    </span>

                </div>

            </div>

        </nav>
    );
};

export default Navbar;