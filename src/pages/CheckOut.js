import React, {useState} from "react";
import '../App.css';
import {Button} from '../Components/Button'
import {Header} from '../Components/Header'
import {Welcome} from '../Components/Welcome'
import {UserField, UserField2} from '../Components/UserField'
import axios from "axios";
const moment = require('moment')
var querystring = require('querystring');

export const CheckOut = () =>{

  const [VehicleNumber, setNumber] = useState("");
  const [Time, setTime] = useState("");
  const [labelText, setLable ] = useState("");
  const [price, setprice] = useState("");
  const [textcolor, setcolor] = useState("green");

  
  const patten = /([a-zA-z]{2} [a-zA-Z0-9]{1,2} [a-zA-Z0-9]{4})/g;
  const time_patten = /([0-9]{1,2}:[0-9]{2} [a-zA-Z]{2})/g;
  
  

  const sumbitData = (e) => {
  
    e.preventDefault();
    console.log(VehicleNumber);
    console.log(Time);

   let output="Error";
   
   let isTrue = false;
  
   //checking for validation
   if(!VehicleNumber.match(patten))
   {
    setNumber("");
    output = output + ": Invalid Vehicle Number --> Eg(TN 20 0990)\n";
    isTrue = true;
   }
   
   if(!Time.match(time_patten))
   {
    output = output + "Error : Invalid Time Format --> Eg(10:00 PM)\n";
    setTime("");
    isTrue = true;
   }
   if(isTrue)
   {
    window.alert(output);
     return;
   }


   setNumber(VehicleNumber.toUpperCase());

   
     //get data from database and calculate the fare amount
     
     axios.post('/vehicles/checkout' ,  querystring.stringify({"vnumber" :  VehicleNumber}
     ), {
     headers: { 
    "Content-Type": "application/x-www-form-urlencoded"
     }
     }).then(res => {
       
       //calculate amount

       let startTime = moment(res.data.CheckIN, 'hh:mm A').format('HH:mm').split(':');
       let endTime = moment(Time, 'hh:mm A').format('HH:mm').split(':');
       let hours = Math.abs(startTime[0] - endTime[0]);
       if(res.data.VehicleType === 'Car')
       {
          setprice("The parking duration of "+hours+" hours cost Rs."+hours * 50 )
       }
       else
       {
        setprice("The parking duration of "+hours+" hours cost Rs."+hours * 10 )
       }
       setcolor("green");
     setLable("Vehicle parked at "+res.data.LotAlloted+" is checked out Successfully");

     //store history
     var dNow = new Date();
     var date =   dNow.getDate() + '/' + ( dNow.getMonth() + 1 ) + '/' + dNow.getFullYear();
    
     axios.post('/vehicles/storehistory' ,  querystring.stringify(
       {
         "vnumber" :  VehicleNumber, 
         "CheckIN" : res.data.CheckIN,
         "CheckOUT": Time,
         "DATE": date,
         "FLOOR": res.data.LotAlloted.charAt(0)
        }
     ), {
     headers: { 
    "Content-Type": "application/x-www-form-urlencoded"
     }
     }).then(res =>{
       console.log(res)
     })


        })
        .catch(error => {
          setcolor("red");
          setLable("Vehicle not founded")
        })  

   setNumber("");
   setTime("");
  
   
  }
 
    return(
  <div className='App'>
    <form onSubmit={sumbitData}>
  <br></br>
<br></br>
<br></br>
<Button buttonsize="btn--lefttop" onClick={event =>  window.location.href='/menu'}>HOME</Button>
<Header></Header>
<br></br>
<br></br>

<h2>CHECK OUT</h2>

<br></br>
<br></br>
<div className='userdata'>
<UserField getData={VehicleNumber => setNumber(VehicleNumber)}  children="Vehicle Number" value={VehicleNumber}></UserField>
<br></br>
<br></br>
<UserField getData={Time => setTime(Time)} value={Time} children="Check Out Time"></UserField>
<br></br>
<br></br>
<Button type="submit">Check Out</Button>
<br></br>
          <br></br>
          <br></br>
          <br></br>
          <label className={textcolor}>{labelText}</label>
          <br></br>
          <br></br>
          <label className="labeltext">{price}</label>
</div>
</form>
</div>
    
    );
}



