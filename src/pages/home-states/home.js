import React, { useContext } from "react";
import { appContext } from "../../WeatherApp";
import { HomeError } from "./error";
import { HomeLoading } from "./loading";
import { HomeDisplay } from "./HomeDisplay"

export const Home=()=>{
    const {weatherData, isLoading, isError}= useContext(appContext);
    if(isLoading){
        return <HomeLoading/>
    }
    else if(isError){
        return <HomeError/>
    }
    else if(weatherData){
        return <HomeDisplay/>
    }
    return(
        <div>

        </div>
    );
}