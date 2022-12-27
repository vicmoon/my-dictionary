import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";


export default function Dictionary(){
let [keyWord, newkeyWord]= useState("");


   function searchWord(event){
    event.preventDefault();
  
   }
   
   function handleResult(response){
    console.log(response.data[0]);
   }

function handleKeyword(event){
    newkeyWord(event.target.value);

    //document from: https://dictionaryapi.dev/ 
    
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    console.log(apiURL);
    axios.get(apiURL).then(handleResult);

   }

    return (
        <div className="dictionary">
            <form onSubmit={searchWord}> 
            <input
            placeholder="Type a word"
            type="search"
            onChange={handleKeyword}
            /> </form>
        
        </div>
    );
}