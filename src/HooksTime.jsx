import React, { useState } from "react";

const App = () =>{
    let newTime = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(newTime);

    const updateTime= () =>{
        newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
    }
    return(
        <>
            <h1> Time {ctime} </h1>
            <button onClick= {updateTime}> Get Time </button>
        </>

    );
};

export default App;