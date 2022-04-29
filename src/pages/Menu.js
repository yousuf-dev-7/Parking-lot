import React from "react";
import '../App.css';
import '../Components/button.css'
import {Button} from '../Components/Button'
import {Header} from '../Components/Header'
import {Welcome} from '../Components/Welcome'
import { useNavigate } from "react-router-dom";

export const Menu = () =>{

    let navigate = useNavigate(); 
    const routeChange = loc =>{ 
      
      navigate("/checkin");
    }
    return(
    //welcome page
    <div className="App">
    
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <Header></Header>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <Button buttonsize="btn--equal" onClick={event =>  window.location.href='/checkin'}>CHECKIN</Button>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <Button buttonsize="btn--equal" onClick={event =>  window.location.href='/checkout'}>CHECKOUT</Button>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <Button buttonsize="btn--equal" onClick={event =>  window.location.href='/find'}>FIND MY VEHICLE</Button>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <Button buttonsize="btn--large" onClick={event =>  window.location.href='/showlots'}>SHOW LOTS</Button>
  

    </div>
    
    );
}