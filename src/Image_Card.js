import Cloud from "./clouds.png"
import Thunder from "./thunder.png";
import CloudIcon from '@material-ui/icons/Cloud';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Mist from "./mist_weather.png";
import Rainy from "./rainy.png";
import Snow from "./snow.png";
import FlashOnIcon from '@material-ui/icons/FlashOn';
import Sun from "./sun.png";
import Haze from "./haze.png";


const Image=(props)=>{
   console.log("yess")
        if(props.Data==="Clouds")
        {
            // console.log("yess2");
            return(
                <>
            <img src={Cloud} alt="cloud"></img>
            {/* <CloudIcon className="Sunny" style={{fontSize:"5rem"}}/> */}

                </>
            );
        }
       else if(props.Data==="Haze")
        {
            return(
              <>
               <img src={Haze} alt="Thunder"></img>
         {/* <WbSunnyIcon className="Sunny" style={{fontSize:"5rem"}}/> */}
              </>
            );
        }
        else if(props.Data==="Mist")
        {
            return(
              <>
                    <img src={Mist} alt="Misty"></img>
             
              </>
            );
        } 
        else if(props.Data==="clear")
        {
            return(
        
                <img src={Sun} alt="Thunder"></img>
                // <WbSunnyIcon className="Sunny" style={{fontSize:"5rem"}}/>

                );
        }
    
        else if(props.Data==="Rain")
        {
            console.log("in rain");
            return(
        
                // <FlashOnIcon/>
                    // <CloudIcon className="Sunny" style={{fontSize:"5rem"}}/>
                    // <img src={FlashOnIcon}></img>
                    <img src={Rainy}></img>
                );
        }

        else if(props.Data==="Snow")
        {
            return(
        
                <img src={Snow} alt="snow"></img>
                );
        }
        else if(props.Data==="Thunder")
        {
            return(
        
                <img src={Thunder} alt="Thunder"></img>
                );
        }

        console.log(props.Data);
    
        return(
   <>
   <div>
   {/* <WbSunnyIcon className="Sunny" style={{fontSize:"5rem"}}/> */}
   <img src={Sun} alt="Thunder"></img>
   </div>
   </>

        );
    
}


export default Image;