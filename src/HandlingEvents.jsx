import React, { useState } from "react";

const HandlingEvents = () => {
    const purple = "purple";
    const[bg, setBg] = useState(purple);
    const [name, setName] = useState("Click Me");
  
    const bgChange = ()=>{
        let newBg = "#23395e";
        setBg(newBg);
        setName("Ouch!!🐺");
    };
    const bgBack = () =>{
        setBg(purple);
        setName("Ayyo!!😈");
    }

    return(
    <React.Fragment>
        <div style= {{backgroundColor: bg}}>
            {/* <button onClick = {bgChange} onDoubleClick = {bgBack}> {name}</button> */}
            <button onMouseEnter = {bgChange} onMouseLeave = {bgBack}> {name}</button>
        </div>
    </React.Fragment>
    );
};

export default HandlingEvents;