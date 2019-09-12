import './greatIcon.css'
import React from "react";

export function GreatIcon(props){
    return(
        < div className = "greatIcon">
            <img className = "greatIconImg" src = {props.image_path}></img>
            <p className = "greatIconText">{props.name}</p>
        </div>
    )
}