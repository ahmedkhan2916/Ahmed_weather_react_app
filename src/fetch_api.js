import axios from "axios"


const fetc=async ()=>
{

   const response=await axios.get(`api.openweathermap.org/data/2.5/weather?q=London,uk&appid=ba6953adbb6fcb10a16615a104a7e330`);

}


export default fetc;