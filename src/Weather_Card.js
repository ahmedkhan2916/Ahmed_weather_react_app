import './App.css';
import axios from "axios";
import "weather-icons/css/weather-icons.css";
import CloudIcon from '@material-ui/icons/Cloud';
import Cloud from "./clouds.png";
import Image from "./Image_Card";
import Cel from "./celsius.png";
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

import { useEffect, useState } from 'react';

const Weather_Card=()=>
{    
  const [data_api,setData_api]=useState("");
  const [cel,setCel]=useState("");
  const [data,setData]=useState("");
  useEffect(() => {
  const fetc=async ()=>
{

   const response=await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${data_api}&units=metric&appid=ba6953adbb6fcb10a16615a104a7e330`);
   console.log(response);
   setCel(response.data.main.temp);
   setData(response.data.weather[0].main);
}
fetc();
  },[data_api]);

  return(
    
     <div className="Weather-card">
       <div className="Form-container">
            <form>
     <input type="text" placeholder="enter city name..." value={data_api}onChange={(event)=>{

       setData_api(event.target.value);
      
     }}></input>
     </form>
     </div>
       { !data_api ?(<div className="no-info-container">
 
         <h1 className="no-info">No Information found.....</h1>
         <SentimentVeryDissatisfiedIcon style={{fontSize:"3rem"}}/>
         </div>) : (
     <div className="Cel-container1">
    <div className="img-cont">
      
    <div className="Cel-Container2">
     {/* <div><CloudIcon/></div> */}
     <Image Data={data}/>
     <h1>{data_api}</h1>
      <p>{cel} <img src={Cel} className="Celcius"></img></p>
     </div>

       </div>
   
   
    
     {/* <p>{cel}<Cel/></p> */}
   

     </div>
       )}   
     </div>

  );

}

export default Weather_Card;




