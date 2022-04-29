import React, { useState } from "react";
import "./userfield.css"

export const UserField = (props) =>
{

    return (
  
        <div className="UserField">
        <label align="left" className="labeltext">{props.children}</label>
         <input maxLength="10" onChange={(e) => props.getData(e.target.value)} className="textinput" type="text" value={props.value}
         required
         ></input>
        </div>
              
    );
} 

export const UserField2 = (props) =>
{

    return (
        <div className="UserField2">
        <label align="left" className="labeltext">{props.children}</label>
        <div align="left" className="innerbody">
         <input onChange={(e) => props.getData(e.target.value)} checked={props.checked} required name="box" value="Car" type="radio"></input>
         <label className="typelable">  Car </label>
         <input onChange={(e) => props.getData(e.target.value)} name = "box" value="Bike" type="radio"></input>
         <label>  Bike  </label>
        </div>
         
        </div>
    );
} 