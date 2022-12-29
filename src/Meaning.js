import React from "react";
import Synonyms from "./Synonyms.js";


export default function Meaning(props){
    return (
        <div className="meaning"> 
        <h3> {props.meaning.partOfSpeech}</h3> 
        {props.meaning.definitions.map(function(definition, index) 
        {
            return (
                <div key= {index}> 
                
                
                {definition.definition}
                <br />
                Example:
                <em> {definition.example} </em>
               <Synonyms synonyms={definition.synonyms}/>
            
             
                </div>
            );

        })}
     
        </div>
    );
}