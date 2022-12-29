import React from "react";
import "./Phonetics.css"; 

export default function Phonetic(props){
    
    return (
        <div className="phonetic"> 
           <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            Audio
           </a> <br/>
           <small>{props.phonetic.text}</small>
        </div>

    )
}