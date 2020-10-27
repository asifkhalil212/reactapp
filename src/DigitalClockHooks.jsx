import React, { useState } from "react";

const DigitalClockHooks = () => {
    let time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time);
  
    const updateTime = ()=>{
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(updateTime,);
    return(
    <>
        <h1> Welcome to Digital Clock</h1><br />
        <h1> Current Time: {ctime}</h1>
        {/* <button onClick= {updateTime}>get time</button> */}
        </>
    );
};

export default DigitalClockHooks;