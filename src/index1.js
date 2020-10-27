import React from "react";
import ReactDOM from "react-dom";

//var React = require('react');
//var ReactDOM = require('react-dom');

ReactDOM.render(
                // <div>
                //     <h1>Hello World!!</h1>
                //     <p>Please like and share!</p>
                // </div>
               
                // [
                //     <h1>Hello World!!</h1>,
                //     <p>Please like and share!!</p>
                // ]
                
                // <React.Fragment>
                //     <h1>Hello World!!</h1>
                //     <p>Please like and share!!!</p>
                // </React.Fragment>

                <>
                    <h1>Hello World!!</h1>
                    <p>Please like and share!!!!</p>
                </>
                ,document.getElementById("root"));


var h1 = document.createElement("h1");
h1.innerHTML = "Hello India!";
document.getElementById("root").append(h1);