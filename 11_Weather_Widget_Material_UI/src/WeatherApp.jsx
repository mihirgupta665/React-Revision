import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 20.49,
        humidity: 49,
        temp: 21.05,
        tempMax: 21.05,
        tempMin: 21.05,
        weather: "haze"
    })

    return(
        <div style={{textAlign: "center"}}>
            <h1>Weather App</h1>
            <div style={{display: "flex", justifyContent: "space-evenly" }}>
            <SearchBox />
            <InfoBox info={weatherInfo} />
            </div>
            <br />
            <hr />
        </div>
    );
}