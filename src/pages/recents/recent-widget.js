import react from 'react';

export const RecentWidget= ({weatherData,deleteEntry})=>{
    return (
        <div className='flex h-1/10 bg-green-500 my-4 rounded'>
            <div className='flex-1 h-full ml-5 mr-10 font-bold text-lg text-center'>
                    <img src={weatherData.current.condition.icon} className='w-full'/>
                    {weatherData.current.temp_c}°C
            </div>
            <div className='mx-3 my-2 font-semibold text-lg flex-6'>
                <p>{weatherData.location.name}</p>
                <p>{weatherData.location.country}</p>
            </div>
            <div className='mx-3 my-2 font-semibold text-lg flex-3'>
                <p>Humidity: {weatherData.current.humidity}</p>
                <p>Wind: {weatherData.current.wind_kph} km/h</p>
            </div>
            <div className='mx-3 my-2 font-semibold text-lg flex-3'>
                <p>Visibility: {weatherData.current.vis_km} km</p>
                <p>Precipitation: {weatherData.current.precip_mm} mm</p>
            </div>
            <div className='mx-3 my-2 font-semibold text-lg flex-3'>
                <p>PM2.5: {weatherData.current.air_quality.pm2_5.toFixed(2)}</p>
                <p>PM10: {weatherData.current.air_quality.pm10.toFixed(2)}</p>
            </div>
            <div className='flex-2 font-bold text-center text-lg self-center hover:text-red-600 hover:cursor-pointer' onClick={()=>deleteEntry(weatherData._id)}>
                X
            </div>
        </div>
    );
}
//display last updated
