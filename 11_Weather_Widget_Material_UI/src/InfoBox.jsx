import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox() {

    const INIT_URL = "https://images.unsplash.com/photo-1766405531538-69653203c947?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    let info = {
        city: "Delhi",
        feelslike: 20.49,
        humidity: 49,
        temp: 21.05,
        tempMax: 21.05,
        tempMin: 21.05,
        weather: "haze"
    }

    return (
        <div>
            <h1>Weather Info</h1>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={INIT_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {info.city}
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
    );
}