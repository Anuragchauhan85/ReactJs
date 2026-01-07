import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./searchBox";

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
      city: "Delhi",
      feelslike: 18.15,
      humidity: 20,
      temp: 19.61,
      tempmax: 19.61,
      tempmin: 19.61,
      weather: "clear sky",
    });

    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    }

    return (
      <div style={{textAlign:"center"}}>
        <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo } />
            <InfoBox info={weatherInfo} />
      </div>
    );
}