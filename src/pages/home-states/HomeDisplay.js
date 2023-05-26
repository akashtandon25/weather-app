import React,{useContext} from "react";
import { appContext } from "../../WeatherApp";

export const HomeDisplay= ()=>{
    const {weatherData, isLoading, isError}= useContext(appContext);
    const datetime=new Date(weatherData?.location.localtime);
    const date= datetime.toLocaleDateString();
    const time=datetime.toLocaleTimeString();
    return(
        <div className="align-middle mx-100 mt-50 bg-green-300 p-16 pb-5 rounded-3xl">
                <div className="flex bg-white rounded-xl mb-7 justify-between py-3 px-5">
                    <div className="text-4xl font-bold">
                        {`${weatherData.location.name}, ${weatherData.location.country}`}
                    </div>
                    <div className="text-xl m-2 font-semibold">
                        <div>
                            {time}
                        </div>
                        <div>
                            {date}
                        </div>
                    </div>
                </div>
                <div className="flex rounded-2xl py-5 px-12 my-5 text-center align-middle justify-between">
                    <div className="bg-white p-12 rounded-2xl w-60 text-center">
                        <div className="text-3xl font-semibold">
                            {`${weatherData.current.temp_c}°C`}
                        </div>
                        <div className="flex"><img src={weatherData.current.condition.icon} className="h-24 rounded flex-1 justify-center"></img></div>
                    </div>
                    <div className="align-center bg-white py-6 px-12 rounded-2xl w-60">
                        <div className="text-xl m-2 font-semibold">
                            Humidity
                        </div>
                        <div className="text-xl m-2 font-semibold">
                            {weatherData.current.humidity}
                        </div>
                        <hr/>
                        <div className="text-xl m-2 font-semibold">
                            Wind
                        </div>
                        <div className="text-xl m-2 font-semibold">
                            {weatherData.current.wind_kph}
                        </div>
                    </div>
                    <div className="align-center bg-white py-6 px-12 rounded-2xl w-60">
                        <div className="text-xl m-2 font-semibold">
                            PM2.5
                        </div>
                        <div className="text-xl m-2 font-semibold">
                            {weatherData.current.air_quality.pm2_5.toFixed(2)}
                        </div>
                        <hr/>
                        <div className="text-xl m-2 font-semibold">
                            Pm10
                        </div>
                        <div className="text-xl m-2 font-semibold">
                            {weatherData.current.air_quality.pm10.toFixed(2)}
                        </div>
                    </div>
                </div>
                <div className="flex rounded-2xl py-5 px-12 my-5 text-center align-middle justify-between">
                    <div className="align-center bg-white py-6 px-12 rounded-2xl w-60">
                        <div className="text-xl m-2 font-semibold">
                            Feels Like
                        </div>
                        <div className="text-xl m-2 font-semibold">
                            {`${weatherData.current.feelslike_c}°C`}
                        </div>
                    </div>
                    <div className="align-center bg-white py-6 px-12 rounded-2xl w-60">
                        <div className="text-xl m-2 font-semibold">
                            Visibility
                        </div>
                        <div className="text-xl m-2 font-semibold">
                            {`${weatherData.current.vis_km.toFixed(0)}km`}
                        </div>
                    </div>
                    <div className="align-center bg-white py-6 px-12 rounded-2xl w-60">
                        <div className="text-xl m-2 font-semibold">
                            Precipitation
                        </div>
                        <div className="text-xl m-2 font-semibold">
                            {`${weatherData.current.precip_mm.toFixed(0)}mm`}
                        </div>
                    </div>
                </div>
            </div>
    );
}

const fontDiv= ()=>{
    return <div ></div>
}