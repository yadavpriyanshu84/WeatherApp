import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
     let [city,setCity]=useState("");
      let [err,setErr]=useState(false);
const API_URL= "https://api.openweathermap.org/data/2.5/weather";
const API_KEY= "a25435d7344fa5780bd675a8f4b0a695";
let getWheatherInfo=async()=>{
    try{
         let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}`
    );
    let jsonResponse=await response.json();
    console.log(jsonResponse);
    let result={
        city:city,
        temp:jsonResponse.main.temp,
        tempmin:jsonResponse.main.temp_min,
         tempmax:jsonResponse.main.temp_max,
         humidity:jsonResponse.main.humidity,
         feellikes:jsonResponse.main.feels_like,
          };
    console.log(result);
    return result;
        
    }
    catch(err){
        throw err;

    }
   

};
   
    let handleChange=(evt)=>{
        setCity(evt.target.value);
    };
    let handleSubmit=async(evt)=>{
        try{
             evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo=await getWheatherInfo();
        updateInfo(newInfo);

        }catch(err){
            setErr(true);

        }
       
    };
    return(
        <div className='SearchBox'>
            {/* <h3>Search for the wheather</h3> */}
            <form className='SeachBox' onSubmit={handleSubmit}>
                  <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/> 
                  <br></br><br></br>
                   <Button variant="contained" type="submit">Search </Button>
                   {err && <p style={{color:"red"}}>No such place exits!</p>}
            </form>
        </div>
    );
}