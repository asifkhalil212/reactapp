import React from "react";
import ReactDOM from "react-dom";

const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();
ReactDOM.render(
    <React.Fragment>
        <h1>Hello, My name is Md Asif Khalil !</h1>
        <p>Today Date is: {currentDate}</p>
        <p>Current Time is: {currentTime}</p>
    </React.Fragment>
    ,
    document.getElementById("root")

);
