import React,{useContext} from "react";
import { appContext } from "../../WeatherApp";

export const HomeError= ()=>{
    const {isError}=useContext(appContext);
    return (
        <div className="bg-gray-200 h-40 text-red-800 text-3xl w-48 align-middle m-24 rounded-lg text-center">
            Error!
            <br></br>
            {isError.message}
        </div>
    );
}