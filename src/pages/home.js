import React, { useContext } from "react";
import { appContext } from "../WeatherApp";

export const Home=()=>{
    const {weatherData}= useContext(appContext);
    const datetime=new Date(weatherData?.location.localtime);
    const date= datetime.toLocaleDateString();
    const time=datetime.toLocaleTimeString();
    return (
        weatherData
            ?<div className="Home">
                <div className="HomeRow1">
                    <div style={{fontSize:"30px"}}>
                        {`${weatherData.location.name}, ${weatherData.location.country}`}
                    </div>
                    <div className="FontDiv">
                        <div>
                            {time}
                        </div>
                        <div>
                            {date}
                        </div>
                    </div>
                </div>
                <div className="HomeRow2">
                    <div className="TempDiv1">
                        <div style={{fontSize:"30px"}}>
                            {`${weatherData.current.temp_c}°C`}
                        </div>
                        <img src={weatherData.current.condition.icon} className="HomeImage" style={{padding:"0px"}}></img>
                    </div>
                    <div className="TempDiv1">
                        <div className="FontDiv">
                            Humidity
                        </div>
                        <div className="FontDiv">
                            {weatherData.current.humidity}
                        </div>
                        <hr/>
                        <div className="FontDiv">
                            Wind
                        </div>
                        <div className="FontDiv">
                            {weatherData.current.wind_kph}
                        </div>
                    </div>
                    <div className="TempDiv1">
                        <div className="FontDiv">
                            PM2.5
                        </div>
                        <div className="FontDiv">
                            {weatherData.current.air_quality.pm2_5.toFixed(2)}
                        </div>
                        <hr/>
                        <div className="FontDiv">
                            Pm10
                        </div>
                        <div className="FontDiv">
                            {weatherData.current.air_quality.pm10.toFixed(2)}
                        </div>
                    </div>
                </div>
                <div className="HomeRow2">
                    <div className="TempDiv1">
                        <div className="FontDiv">
                            Feels Like
                        </div>
                        <div className="FontDiv">
                            {`${weatherData.current.feelslike_c}°C`}
                        </div>
                    </div>
                    <div className="TempDiv1">
                        <div className="FontDiv">
                            Visibility
                        </div>
                        <div className="FontDiv">
                            {`${weatherData.current.vis_km.toFixed(0)}km`}
                        </div>
                    </div>
                    <div className="TempDiv1">
                        <div className="FontDiv">
                            Precipitation
                        </div>
                        <div className="FontDiv">
                            {`${weatherData.current.precip_mm.toFixed(0)}mm`}
                        </div>
                    </div>
                </div>
            </div>
            :<div>

            </div>
    )
}