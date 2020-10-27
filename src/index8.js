import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

 let currentDate = new Date(2020, 5, 5, 22);
//let currentDate = new Date();
currentDate = currentDate.getHours();
let greeting = '';

const cssStyle ={};

if(currentDate >= 1 && currentDate <12)
{
    greeting = 'Good Morning';
    cssStyle.color ="green"
}else if(currentDate >=12 && currentDate < 19 )
{
    greeting = 'Good Afternoon';
    cssStyle.color = "Orange";
}else {
    greeting = 'Good Night ';
    cssStyle.color = "Black";
}

ReactDOM.render(

        <h1>Hello Sir/Madam, <span style= {cssStyle}> {greeting}</span></h1>
    ,document.getElementById('root')
);