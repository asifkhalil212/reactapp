import React from 'react';
import SlotMachine from "./SlotMachine";

const SlotApp = () => {

    return(
        <React.Fragment>
            <h1 className="heading_style">
                🎰 Welcome to <span style = {{fontWeight: "bold"}}>Slot machine game</span>🎰
            </h1>
           
            <div className="slotmachine">
                <SlotMachine x='😄' y='😄' z='😄'/>
                <SlotMachine x='😄' y='🍎' z='😄'/>
                <SlotMachine x='🍌' y='😄' z='🍊'/>
                <SlotMachine x='💝' y='💝' z='💝'/>
            </div>
        </React.Fragment>
    )
}

export default SlotApp;