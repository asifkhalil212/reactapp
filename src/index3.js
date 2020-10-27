import React from "react";
import ReactDOM from "react-dom";

const name = "Md Asif Khalil";
const fname = "Asif";
const lname = "Khalil";

ReactDOM.render(
    <React.Fragment>
        <h1>My name is {name} !</h1>
        <p>My name is {fname}{lname}</p>
        <p>My name is {fname + " " + lname}</p>

         {/* User backtick symbole  */}
        <p>My name is {`${fname} ${lname}`}</p>
        <p>{`My first name is ${fname} and last name is ${lname}`}</p>
        <p>The sum of two number is {3+3}</p>
        <p>Random Number: {Math.random()}</p>
    </React.Fragment>
    ,document.getElementById('root')

);
