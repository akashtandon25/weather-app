import React, { useState, createContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';
import { Navbar } from "./Navbar";
import { Home } from "./pages/home-states/home";
import { Recents } from "./pages/recents/recents";
import { About } from "./pages/about";

export const appContext= createContext();
function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading]= useState(false);
  const [isError, setIsError]= useState(null);

  useEffect(()=>{
    if(weatherData){
      const addToDb= async ()=>{
        try{
          const res= await axios.post('http://localhost:8000/store-data',weatherData);
          console.log(res);
        }
        catch(error){
          console.log(error);
        }
      }
      addToDb();
    }
  },[weatherData]);
  return (
    <appContext.Provider value={{weatherData,setWeatherData,isLoading,setIsLoading,isError,setIsError}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recents" element={<Recents />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </appContext.Provider>
  );
}

export default WeatherApp;


// Add pincode functionality
// Use tailwind CSS
// Handle loading and error states