import React from "react";
import Meaning from "./Meaning.js";
import Phonetics from "./Phonetics.js";

export default function Results(props){
    if(props.results){
        return (
        <div className= "result"> 
                <h2> {props.results.word} </h2>
                {props.results.phonetics.map(function(phonetics, index){
              return (
                <div key= {index}> 
              <Phonetics phonetic={phonetics} /> 
               </div>
            )
        })}
        
        

        {props.results.meanings.map(function(meaning, index){
            return (
                <div key={index}> 
                <Meaning meaning={meaning} />
                </div>
            );
            })}
        </div>
        );
    } else {
        return null;
    }
    
}