import React,{useState} from "react";
import "./Event.css";

import {data} from "./data.js";
import Card from "../Card/Card";

import { Link } from "react-router-dom";
import facebook from "../imgsrc/facebook.png";
import X from "../imgsrc/X.png";
import instagram from "../imgsrc/instagram.png";
import axios from "axios";
function Event(){
    const [query,setQuery] = useState('');
    const [event,setEvent] = useState([]);

let config = {
   method: 'get',
   maxBodyLength: Infinity,
   url: 'https://Real-Time-Events-Search.proxy-production.allthingsdev.co/v1/search-events?query=Concerts%20in%20San-Francisco&date=any&is_virtual=false&start=0',
   headers: { 
      'x-apihub-key': '', 
      'x-apihub-host': 'Real-Time-Events-Search.allthingsdev.co', 
      'x-apihub-endpoint': '0ac072ed-7872-4f4c-9304-7a8252d633b3'
   }
};

axios.request(config)
.then((response) => {
    setEvent(response.data);
   console.log(JSON.stringify(response.data));
})
.catch((error) => {
   console.log(error);
});

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
            <div>
                {event.map((item)=>{
                    const {name} = item;
                    return(
                        <div>
                            {name}
                        </div>
                    )
                })}
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