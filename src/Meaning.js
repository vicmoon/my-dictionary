import React from "react";


export default function Meaning(props){
    return (
        <div className="meaning"> 
        <h3>{props.meaning.partofSpeech} </h3>
        
        {props.meaning.definitions.map(function(definition, index) 
        {
            return (
                <div key= {index}> 
                <p> 
                {definition.definition}
                <br />
                {definition.example}
                </p>
                </div>
            );

        })}
     
        </div>
    );
}