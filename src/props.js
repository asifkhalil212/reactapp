import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";

ReactDOM.render(
    <React.Fragment>
        <h1>Props Example for Cards</h1>

        <Card 
            imgsrc="https://wallpapercave.com/wp/wp7418473.jpg" 
            title="Extracurricular Netflix"
            sname="Caveman"
            link="https://wallpapercave.com/extracurricular-netflix-wallpapers"
        >
        </Card>

        <Card 
            imgsrc="https://wallpapercave.com/wp/wp6521869.jpg" 
            title="Netflix Final Space"
            sname="Netflix Final Space"
            link="https://wallpapercave.com/extracurricular-netflix-wallpapers"
        >
        </Card>

    </React.Fragment>
    ,document.getElementById('root')
);