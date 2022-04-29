import React from "react";
import '../App.css';
import {Button} from '../Components/Button'
import {Header} from '../Components/Header'
import {Welcome} from '../Components/Welcome'
import axios from "axios";
var querystring = require('querystring');
export const Home = () =>{

  function initilize()
  {
    axios.post('/vehicles/start' ,  querystring.stringify({"capacity" : 5 }
    ), {
    headers: { 
   "Content-Type": "application/x-www-form-urlencoded"
    }
    })
   .then( response => {
     console.log(response);
   }).catch( error => {
     console.log(error);
   })
  }
    return(
    //welcome page
    <div className="App">
  
     <br></br>
       <br></br>
       <Header></Header>
       <Welcome num_of_floor={4} capacity={4}></Welcome>
       <br></br>
       <br></br>
     <Button onClick={()=> ( initilize() , window.location.href='/menu')}>Click me</Button> 
     <br></br>
       <br></br>
     </div>
    
    );
}