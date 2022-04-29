const moment = require('moment')


let convertedTime = moment("09:12 PM", 'hh:mm A').format('HH:mm').split(':');
console.log(convertedTime);


let convertedTime1 = moment("09:12 AM", 'hh:mm A').format('HH:mm').split(':');
console.log(convertedTime1);

console.log(convertedTime1[0] - convertedTime[0]);

let result = Math.abs(convertedTime1[0] - convertedTime[0]);
console.log(result)

axios.post('/vehicles/exits ',  querystring.stringify({"vnumber" : VehicleNumber }
     ), {
     headers: { 
    "Content-Type": "application/x-www-form-urlencoded"
     }
     }).then(res => {
      console.log(res)
     }).catch(err => {
       setLable("Vehicle "+VehicleNumber+" is already parked")
       return;
     })
