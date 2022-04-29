import React, { useState } from "react";


import '../App.css';
import {Button} from '../Components/Button'
import {Header} from '../Components/Header'
import {Welcome} from '../Components/Welcome'
import {UserField, UserField2} from '../Components/UserField'
import '../Components/userfield.css'

import axios from "axios";
var querystring = require('querystring');



const redis = require('redis');
const client = redis.createClient();



export const CheckIn = () =>{

  const [VehicleNumber, setNumber] = useState("");
  const [VehicleType, setType] = useState();
  const [Lot, setLot] = useState();
  const [Time, setTime] = useState();
  const [labelText, setLable ] = useState("");
  


  const patten = /([a-zA-z]{2} [a-zA-Z0-9]{1,2} [a-zA-Z0-9]{4})/g;
  const time_patten = /([0-9]{1,2}:[0-9]{2} [a-zA-Z]{2})/g;

  const  sumbitData = async (e) => {

    e.preventDefault();
  
   let output="Error";
   let upper_lot = Lot;
   upper_lot.toUpperCase();
   let isTrue = false;
  
   // validating UserInput
   if(!VehicleNumber.match(patten))
   {
    output = output + ": Invalid Vehicle Number --> Eg(TN 20 0990)\n";
    isTrue = true;
   }
   
   
   if(upper_lot.length > 1 || upper_lot.match(/[0-9]{1}/g) || upper_lot.charCodeAt(0) < 'A'.charCodeAt(0) || upper_lot.charCodeAt(0) > 'D'.charCodeAt(0))
   {

    output = output + "Error : Invalid Lot --> Eg(A to D)\n";
    isTrue = true;
   }
   if(!Time.match(time_patten))
   {
    output = output + "Error : Invalid Time Format --> Eg(10:00 PM)\n";
    isTrue = true;
   }
   if(isTrue)
   {
    window.alert(output);
     return;
   }


   setLot(upper_lot);
   setNumber(VehicleNumber.toUpperCase());
     

  // check if Lot is available and vehicle is not check In 
      axios.post('/vehicles/getavaliablelot' ,  querystring.stringify({"LOT" : upper_lot , "vnumber" : VehicleNumber }
      ), {
      headers: { 
     "Content-Type": "application/x-www-form-urlencoded"
      }
      }).then(res => {

        
        // if slot is avaliable in database store it in database
        
    // condition to check if vehicle is already parked
     if(res.status === 200)
     {
       setLable("Vehicle "+VehicleNumber +" is already parked")
     } 
     else {   
       //store in redis database
     axios.post('/vehicles/store' ,  querystring.stringify({"vnumber" : VehicleNumber ,
      "vtype" : VehicleType , 
      "vTime" : Time, 
      "LotAlloted" : res.data}
      ), {
      headers: { 
     "Content-Type": "application/x-www-form-urlencoded"
      }
      })
     .then( response => {
       console.log(response)
     }).catch( error => {
       console.log(error);
     })
     
     setLable("Lot : "+res.data+" is alloted");
    }
        })
        .catch(response => {
          console.log(response.status)
          setLable("LOT "+Lot+" is Full")
          return
        })    
       

   setNumber("");
   setTime("");
   setLot("");
   console.log(Lot);

  }

  //  async function checkexits()
  //  {
  //   await axios.post('/vehicles/exits ',  querystring.stringify({"vnumber" : VehicleNumber }
  //   ), {
  //   headers: { 
  //  "Content-Type": "application/x-www-form-urlencoded"
  //   }
  //   }).then(res => {
  //     if(res === 0)
  //      return true;
  //      else
  //      return false;
  //   }).catch(err => {
  //     console.log(err)
  //     console.log("return false")
  //     return false;
  //   });
  //  };

 
    return(
   <div className='App'>
     <form  onSubmit={sumbitData}>
               <br></br>
             <br></br>
             <br></br>
          <Button buttonsize="btn--lefttop" onClick={event =>  window.location.href='/menu'}>HOME</Button>
        <Header></Header>
        <br></br>
             <br></br>
             
             <h2>CHECK IN</h2>
      
             <br></br>
             <br></br>
          <div className='userdata'>
          <UserField className="field1" name="vnumber" getData={VehicleNumber => setNumber(VehicleNumber)} children="Vehicle Number" value={VehicleNumber} ></UserField>
          <br></br>
          <br></br>
          <UserField2 name="vtype" getData={VehicleType => setType(VehicleType)} children="Select Type" ></UserField2>
          <br></br>
          <br></br>
          
          <UserField name ="vlot" getData={Lot => setLot(Lot)} children="Enter Lot" value={Lot}></UserField>
          <br></br>
          <br></br>
          <UserField name ="checkin" getData={Time => setTime(Time)} children="Check in Time" value={Time}></UserField>
          <br></br>
          <br></br>
          <Button  type="submit">Check IN</Button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <label className="labeltext">{labelText}</label>
          </div>
          </form>
        </div>
    
    );
}



