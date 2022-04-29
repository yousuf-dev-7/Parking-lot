import React  from "react";
import "./menu.css";

export const Welcome = ({num_of_floor,capacity}) => {


    return (
     <div>
         <div className="welcometext">
             <p>WELCOME TO PARKING</p>
         </div>
         <div className="details">
           <p>Total Numbers of floors: {num_of_floor} (A,B,C,D)</p>
           <p>Total Capacity of floor: {capacity}</p>
         </div>
         <div className="table">
         <table>
  <tr>
    <th>TYPE OF VEHICLE</th>
    <th>COST/HOUR</th>
  </tr>
  <tr>
    <td><img src="/images/car.png" ></img></td>
    <td>50/hr</td>
  </tr>
  <tr>
    <td><img src="/images/bike.jpg" ></img></td>
    <td>10/hr</td>
  </tr>
</table>
         </div>
     </div>
    );

}