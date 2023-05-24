import React, { useState, createContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./pages/home";
import { Recents } from "./pages/recents";
import { About } from "./pages/about";

export const appContext= createContext();
function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  return (
    <appContext.Provider value={{weatherData,setWeatherData}}>
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