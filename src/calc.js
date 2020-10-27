import React from "react";
import ReactDOM from "react-dom";
import {add, sub, div, mul} from "./Calculator";


ReactDOM.render(
    <React.Fragment>
        <ul>
            <li>The summation of two numbers: {add(10,20)}</li>
            <li>The substraction of two numbers: {sub(10,20)}</li>
            <li>The multiplication um of two numbers: {mul(10,20)}</li>
            <li>The division of two numbers: {div(10,3)}</li>
        </ul>

    </React.Fragment>


    ,document.getElementById('root')
);