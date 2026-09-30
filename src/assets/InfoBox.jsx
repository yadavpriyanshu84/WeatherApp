import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}){
    let INIT_URL= "https://plus.unsplash.com/premium_photo-1769095698445-4230056e8947?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGR1c3R5JTIwd2hlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    let HOT_URL="https://plus.unsplash.com/premium_photo-1733306531071-087c077e1502?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let COLD_URL="https://images.unsplash.com/photo-1519944159858-806d435dc86b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL="https://images.unsplash.com/photo-1619260584294-8a4e63f5ade5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";
   
    return(
        <div className='InfoBox'>
        
            <div className='cardBox'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity> 80 ? RAIN_URL: info.temp>15 ? HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity> 80 ? <ThunderstormIcon />: info.temp>15 ? <SunnyIcon />:<AcUnitIcon />}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temperature={(info.temp- 273.15).toFixed(2)}&deg;C</p>
         <p>Humidity={info.humidity}</p>
         <p>Max Temp={(info.tempmax- 273.15).toFixed(2)}&deg;C</p>
          <p>Min Temp={(info.tempmin- 273.15).toFixed(2)}&deg;C</p>
          <p>The wheather is feels like {(info.feellikes- 273.15).toFixed(2)}&deg;C</p>
        </Typography>
      </CardContent>
     
    </Card>
        </div>
        </div>
    );
}