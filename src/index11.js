import React from "react";
import ReactDOM from "react-dom";
//import youtuber, { favprog, myName, myAddress } from "./ImportExport";
import * as imp from "./ImportExport";


ReactDOM.render(

    <React.Fragment>
        <h1>Import & Export examples</h1>
        {/* <ol>
            <li>{youtuber}</li>
            <li>{favprog}</li>
            <li>{myName()}</li>
            <li>{myAddress()}</li>
        </ol> */}

        <ol>
            <li>{imp.default}</li>
            <li>{imp.favprog}</li>
            <li>{imp.myName()}</li>
            <li>{imp.myAddress()}</li>
        </ol>      
    
    </React.Fragment>
    ,document.getElementById('root')
);