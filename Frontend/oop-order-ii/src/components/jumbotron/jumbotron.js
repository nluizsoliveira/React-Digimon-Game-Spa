import React from "react";
import "./jumbotron.css";

export function Jumbotron(props){
    
    return(
        <div className = "jumbo_background">
            <div className = "orange_border">
                <h1>{props.name}</h1>
            </div>
        </div>
    )
}