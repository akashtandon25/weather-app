import React, { useState, useEffect, useContext } from "react";
import {Link} from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { appContext } from "./WeatherApp";

export const Navbar= ()=>{
    const { weatherData, setWeatherData }= useContext(appContext);
    const [ input, setInput ]= useState("");
    const [isLoading, setIsLoading] = useState(false);
    const handleChange= (event)=>{
        setInput(event.target.value);
    }
    const fetchWeatherData = async () => {
        setIsLoading(true);
        try {
          if (input !== "") {
            const res = await axios.get(
              `https://api.weatherapi.com/v1/current.json?key=c91dbfd7a30c4ec4b41184835232005&q=${input}&aqi=yes`
            );
            setWeatherData(res.data);
          }
        } catch (error) {
          console.log("Error:", error);
          // Handle Error
        } finally {
          setIsLoading(false);
        }
        setInput("");
        // switch to home tab
        // fetch the data here and pass the data as props to home widget?
      };
      // useEffect se isLoading ko bhi handle karna hai
      useEffect(()=>{
      },[weatherData]);
    return (
        <div>
            <div className="InterfaceForm">
                <input className="InputField" type="text" onChange={handleChange} placeholder="Name/Pincode" value={input}></input>
                <button className="SubmitButton" onClick={fetchWeatherData}>Submit</button>
                <div className="NavbarBackground">
                    <Link to={'/'} className="NavbarLink">Home</Link>
                    <Link to={'/Recents'} className="NavbarLink">Recents</Link>
                    <Link to={'/About'} className="NavbarLink">About</Link>
                </div>                
            </div>
        </div>
    )
}
