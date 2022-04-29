import React from "react";
import "./button.css";

const STYLES = [
    "btn--primary--solid",
    "btn--warning--solid",
    "btn--danger--solid",
    "btn--primary--outline",
    "btn--warning--outline",
    "btn--danger--outline",
]

const SIZE = [
    "btn--medium",
    "btn--large",
    "btn--equal",
    "btn--rightbottom",
    "btn--lefttop"
]



export const Button = ({ children, type, onClick, buttonstyle, buttonsize }) => 
{
    const checkbuttonstyle = STYLES.includes(buttonstyle) ? buttonstyle : STYLES[0];
const checkbuttonsize = SIZE.includes(buttonsize) ? buttonsize : "btn--medium"
return (
    <button className={`btn ${checkbuttonstyle} ${checkbuttonsize}`} onClick={onClick} type={type}>{children}</button>
);
}
