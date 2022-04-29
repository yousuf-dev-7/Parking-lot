import React,{useEffect, useState} from "react";
import {Button} from '../Components/Button'
import {Header} from '../Components/Header'

import axios from "axios";
import { Table } from "../Components/table";

var querystring = require('querystring');
const fs = require('fs')


export const ShowLots = () =>{

    
  
    const [tabledata, settabledata] = useState([]);
    // get value from database before render
    useEffect(()=> {
        axios.get('/vehicles/getcapacity')
        .then(res => {
            console.log("int respons")
            console.log(res)
            let history = res.data;
    let array = []
       let c = 'A';
        for( let i =0 ; i <4 ;i++){
            console.log(history[i])
        let result = history[i]
        let avaliable = result === 0 ? '-' : result;
        let veh = avaliable === '-' ? 4 : Math.abs(avaliable - 4);

        const items = {
          "FLOOR" : c,
          "DATE": "4",
          "CheckIN": veh,
          "CheckOUT": avaliable

        }
        array.push(items);
        c = getNextChar(c);
      }

      settabledata(array);

      
      
  })
    },[])
        
    function getNextChar(char) {
        return String.fromCharCode(char.charCodeAt(0) + 1);
      }



 
  
    return(
 <div className='App'>
  <br></br>
<br></br>
<br></br>
<Button buttonsize="btn--lefttop" onClick={event =>  window.location.href='/menu'}>HOME</Button>
<Header></Header>
<br></br>
<br></br>

<h2>SHOW LOTS</h2>

<br></br>
<br></br>
<br></br>
<br></br>
<Table data={tabledata} FLOOR="FLOOR" DATE="CAPACITY" CHECKIN="NO OF VEHICLE" CHECKOUT="AVALAIBLITY" ></Table>

</div> 
    
    );
}