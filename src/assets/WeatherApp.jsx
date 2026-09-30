
import SearchBox from "./SearchBox";
 import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Mumbai",
        feellikes:298.58,
        humidity:78,
        temp:298,
        tempmax:299,
        tempmin:299,
    });

    let updateInfo=(newInfo)=>{
      setWeatherInfo(newInfo);
    }

    return(
        <div>
            <h2>Weather App by Priyanshu</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}