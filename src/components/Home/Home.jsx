import React,{ useEffect } from "react";
import "./Home.css";

import { Link } from "react-router-dom";

import Lottie from "lottie-react";
import code from "./code.json";
import astronaut from "./astronaut.json";
import facebook from "../imgsrc/facebook.png";
import X from "../imgsrc/X.png";
import instagram from "../imgsrc/instagram.png";

import AOS from "aos";
import "aos/dist/aos.css";

function Home(){
    useEffect(()=>{
        AOS.init();
    })
    return(
        <>
            <div className='pageone'>
                <div>
                    <div>
                        <span data-aos='fade-up'>A</span>
                        <span>        </span> 
                        <span className='color' data-aos='fade-up' data-aos-delay='200'>TECH</span>
                        <span>        </span> 
                        <span className='fw300' data-aos='fade-up' data-aos-delay='400'>FEST</span>
                        <span>        </span>
                        <span data-aos='fade-up' data-aos-delay='500'>LIKE</span>
                    </div>
                    <div>
                        <span className='fw300' data-aos='fade-up' data-aos-delay='700'>NEVER</span>
                        <span>        </span>
                        <span data-aos='fade-up' data-aos-delay='900'> BEFORE</span>
                    </div>
                    <div className='loginone'><Link data-aos='fade-right' data-aos-delay='900' to='/login'>LOG IN</Link></div>
                </div>
                <div>
                    <Lottie data-aos='fade-left' data-aos-delay='900' className='code' animationData={code} />
                </div>
            </div>
            <div className='pagetwo'>
                <div>
                    <Lottie data-aos='fade-up' data-aos-delay='300' className='astronaut' animationData={astronaut} />
                </div>
                <div>
                    <h1 data-aos='fade-up'>ONE OF THE <span className='color'>BEST</span></h1> 
                    <h1 data-aos='fade-up' data-aos-delay='300'>TECH FESTS</h1>
                    <h1 data-aos='fade-up' data-aos-delay='500'>IN TOWN</h1>
                </div>
            </div>
            <div data-aos='fade-up' className='footer'>
                <h2>festify</h2>
                <div>
                    <Link to='/event'>Events</Link>
                    <Link to='/login'>LogIn</Link>
                </div>
                <div>
                    <a href='https://facebook.com' target='_blank'><img src={facebook} /></a>
                    <a href='https://twitter.com' target='_blank'><img src={X} /></a>
                    <a href='https://instagram.com' target='_blank'><img src={instagram} /></a>             
                </div>
            </div>
        </>
    );
}
export default Home;