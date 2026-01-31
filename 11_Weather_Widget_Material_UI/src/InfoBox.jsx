import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {

    const INIT_URL = "https://images.unsplash.com/photo-1705077296278-d82dd5c8662f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VhdGhlciUyMGZvcmVjYXN0fGVufDB8fDB8fHww"
    const HOT_URL =  "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const COLD_URL =  "https://images.unsplash.com/photo-1766405531756-b1290ba82619?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAIN_URL = "https://images.unsplash.com/photo-1559464674-77bd3e0445d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW4lMjB0aHVuZGVyJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"


    return (
        <div className="InfoBox">
            <h1>Weather Info</h1>
            <div className="cardContainer">

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            {info.city.toString().toUpperCase()} {info.humidity > 80 ? <ThunderstormIcon />: info.temp > 15 ? <SunnyIcon /> : <AcUnitIcon />}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            Weather is described as {info.weather}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.primary' }} component="div">
                            <div>
                                <p>Current Temperature = {info.temp} &deg;C</p>
                                <p>Feels Like = {info.feelslike} &deg;C</p>
                                <p>Humidity = {info.humidity}</p>
                            </div>
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="div">
                            <div>
                                <p>Minimum Temperature = {info.tempMin} &deg;C</p>
                                <p>Maximum Temperatur = {info.tempMax} &deg;C</p>
                            </div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}