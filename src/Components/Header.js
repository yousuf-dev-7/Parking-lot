import React from "react";
import "./header.css";


export const Header = ({Name,logo}) =>
{

    return (
        <div className="header">
         <img src="/images/parking.png"></img>
         <h1>PARKING LOT</h1>
        </div>
    )
}