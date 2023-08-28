import React,{useState} from "react";
import "./Event.css";

import {data} from "./data.js";
import Card from "../Card/Card";

import { Link } from "react-router-dom";
import facebook from "../imgsrc/facebook.png";
import X from "../imgsrc/X.png";
import instagram from "../imgsrc/instagram.png";

function Event(){
    const [query,setQuery] = useState('');
    return(
        <>
            <div className='event-container'>
                <input type='text' onChange={(e)=>setQuery(e.target.value)} placeholder='Search for an event..'/>
                <div className='event'>
                    {data.filter((item)=>item.event_name.toLowerCase().includes(query)).map((item)=>{
                        const {id,event_name} = item;
                        return(
                            <Card key={id} event_name={event_name} />
                        );
                    })}
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

export default Event;