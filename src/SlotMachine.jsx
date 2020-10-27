import React from "react";
import "./slotmachine.css";
const SlotMachine =(props)=>
{
    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

    let {x, y, z} = props;

    if ((x === y) && (y===z))
    { 
        return(
            <React.Fragment>
            <div className="h1">
                <h1>
                    {x} {y} {z} 
                </h1>
                <h1>This is matching...</h1>
                </div>
                <hr  />
            </React.Fragment>
        )
    }else{
        return(
            <>
            <div className="h1">
                <h1>
                    {x} {y} {z}
                </h1>
                <h1>This is not matching...</h1>
                <hr  />
            </div>
            </>
        )
    }

}

export default SlotMachine;