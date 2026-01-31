import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from "react";


export default function SearchBox() {

    let [city, setCity] = useState("");
    
    let handleChange = (event) => {
        setCity(event.target.value);
    }

    // ?q={city name},{state code},{country code}&limit={limit}&appid={API key}
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "4fe2f28c4b2651c26045422aec92929d";

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric `);    
        let jsonResponse = await response.json();
        // console.log(jsonResponse);
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelslike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
        }
        console.log(result); 
    }

    
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(city);
        getWeatherInfo();
        setCity("");
    }

    return(
        <div className="searchBox">
            <h1>Search Weather</h1>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="Enter City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br />
                <br />
                <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    );
}