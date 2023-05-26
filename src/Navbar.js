import React, { useState, useEffect, useContext } from "react";
import {Link,useNavigate} from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { appContext } from "./WeatherApp"

export const Navbar= ()=>{
    const { weatherData, setWeatherData, setIsLoading, setIsError}= useContext(appContext);
    const [ input, setInput]= useState("");
    const navigate= useNavigate();
    const [options,setOptions]=useState([]);
    const handleChange= async(event)=>{
        setInput(event.target.value);
    }
    useEffect(()=>{
      const fetchData = async () => {
        if (input !== "") {
          try {
            const res = await axios.get(
              `https://api.weatherapi.com/v1/search.json?key=c91dbfd7a30c4ec4b41184835232005&q=${input}`
            );
            setOptions(res.data);
            setIsError(null);
          } catch (error) {
            setIsError(error);
          }
        }
        else {
          setOptions([]);
        }
      }
      fetchData();
    },[input]);
    const fetchWeatherData = async (element) => {
        setIsLoading(true);
        try {
          if (input !== "") {
            const res = await axios.get(
              `https://api.weatherapi.com/v1/current.json?key=c91dbfd7a30c4ec4b41184835232005&q=${element}&aqi=yes`
            );
            setWeatherData(res.data);
            setIsError(null);
          }
        } catch (error) {
          setIsError(error);
        } finally {
          setIsLoading(false);
        }
        setInput("");
        navigate("/");
      };
      useEffect(()=>{
      },[weatherData]);
    return (
        <div>
            <div className="flex align-middle mt-5 justify-center">
                <div className="flex-6 ml-12">
                  <input className="p-2 border-solid flex-1 rounded w-full h-15" type="text" onChange={handleChange} placeholder="Name/Pincode" value={input}></input>
                  <div className="">
                    {options.map((element)=>{
                      return OptionRow(element.name,element.id,fetchWeatherData,setOptions)
                    })}
                  </div>
                </div>
                <button className="bg-blue-700 text-white rounded px-1 py-2 flex-1 mx-10 h-12 font-semibold cursor-pointer hover:bg-blue-600" onClick={()=>fetchWeatherData(input)}>Submit</button>
                <div className="bg-blue-700 rounded flex flex-2 border-black mx-5 my-1 py-2 h-10 justify-between">
                    {NavbarLink('/',"Home")}
                    {NavbarLink('/recents',"Recents")}
                    {NavbarLink('/about',"About")}
                </div>                
            </div>
        </div>
    )
}

const NavbarLink=(element,tag)=>{
  return(
    <Link to={element} className="text-white align-middle text-center flex-1 mx-2 underline hover:font-bold">{tag}</Link>
  );
}

const OptionRow= (name,id,fetchWeatherData,setOptions)=>{
  return(
    <button key={id} className="text-black font-medium border-black rounded bg-gray-50 w-full text-start h-8" onClick={()=>{
        fetchWeatherData(name);
        setOptions([]);
      }}>
      {name}
    </button>
  );
}
