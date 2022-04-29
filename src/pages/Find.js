import React,{useEffect, useState} from "react";
import '../App.css';
import {Button} from '../Components/Button'
import {Header} from '../Components/Header'
import {Welcome} from '../Components/Welcome'
import {UserField, UserField2} from '../Components/UserField'
import {COLUMNS} from '../Components/Columns';




import axios from "axios";
import { Table } from "../Components/table";
var querystring = require('querystring');
const fs = require('fs')


export const Find = () =>{

    const [VehicleNumber, setNumber] = useState("");
    const [labelText, setLable ] = useState("");
    const [textcolor, setcolor] = useState("green");
    const patten = /([a-zA-z]{2} [a-zA-Z0-9]{1,2} [a-zA-Z0-9]{4})/g;
    const [visible,setVisible] = useState(false);
    const [tabledata, settabledata] = useState([]);
     


  const sumbitData = (e) => {
  
    e.preventDefault();

 
   
   let output="Error";
   
   let isTrue = false;
   
   //validaing
   if(!VehicleNumber.match(patten))
   {
    setNumber("");
    output = output + ": Invalid Vehicle Number --> Eg(TN 20 0990)\n";
    isTrue = true;
   }
   if(isTrue)
   {
    window.alert(output);
     return;
   }
    
   //check if vehicle is available
   
   axios.post('/vehicles/find' ,  querystring.stringify({"vnumber" :  VehicleNumber}
   ), {
   headers: { 
  "Content-Type": "application/x-www-form-urlencoded"
   }
   }).then(res => {
     
     
     setcolor("green");
   setLable("Vehicle "+res.data.VehicleNumber+" is parked at "+res.data.LotAlloted+" lot at "+res.data.CheckIN);

   


      })
      .catch(error => {
        setcolor("red");
        setLable("Currently vehicle "+VehicleNumber+" is not checked in");
        setNumber("")

      })  

      //get and show history
      let array =[]
   axios.get('/vehicles/gethistory')
   .then(res => {

     console.log(res);
    let history = res.data;
    let array = []
    for(var i = 0; i < history.length; i++) {
      var obj = JSON.parse(history[i]);
      console.log(obj);
      const newItem = {
        FLOOR: obj.FLOOR,
        CheckIN: obj.CheckIN,
        CheckOUT: obj.CheckOUT,
        DATE: obj.Date
      }
      if(obj.VehicleNumber === VehicleNumber){
      array.push(newItem);
      console.log("true")
      }
      
  }
    

    settabledata(array);
    if(array.length != 0){
      setVisible(true);
    }
    else
    {
      setVisible(false);
    }

    setNumber("")
  }
  )
   
   setNumber(VehicleNumber.toUpperCase());
   setNumber("");
  }

  function removetable(){
    setVisible(false);
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

<h2>FIND MY VEHICLE</h2>

<br></br>
<br></br>
<div className='userdata'>
<UserField getData={VehicleNumber => setNumber(VehicleNumber)} onClick={removetable} children="Vehicle Number"></UserField>
<br></br>
<br></br>
<Button>Find</Button>
<br></br>
<br></br>
<br></br>
<br></br>
<label className={textcolor}>{labelText}</label>
<br></br>
<br></br>
{ visible ? <label className={"black"}>Parking History</label> : null}
<br></br>
<br></br>
{visible ? <Table data={tabledata} FLOOR="FLOOR" DATE="DATE" CHECKIN="CHECK IN" CHECKOUT="CHECK OUT" ></Table> : null }
</div>
</form>
</div> 
    
    );
}

