import React,{ useEffect } from "react";
import "./Card.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Card({event_name}){
    useEffect(()=>{
        AOS.init();
    })
    return(
        <>                      
            <div data-aos='fade-up' data-aos-delay='100' className='card'>
                <h2>{event_name}</h2>
            </div>
        </>
    );
}
export default Card;