import React from 'react';
import ReactDOM from 'react-dom';

const name = "Md Asif Khalil !";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";

ReactDOM.render(
<>
    <h1 contentEditable = "true">My name is {name}</h1>
    <img src= {img1} alt = "radomImage" />
    <img src= {img2} alt = "radomImage" />
  
    <a href="https://www.google.com/" target="_blank">
    <img src= {img3} alt = "radomImage" />
    </a>
</>

,document.getElementById('root')                   

);
