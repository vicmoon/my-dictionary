import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";


export default function Dictionary(){
let [keyWord, newkeyWord]= useState("");


   function searchWord(event){
    event.preventDefault();
    alert(`Searching for ${keyWord}`)
   }
   


   function handleResult(response){
    console.log(response);
   }





function handleKeyword(event){
    newkeyWord(event.target.value);
    let apiURL = "https://api.dictionaryapi.dev/api/v2/entries/en/<word>";
    
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