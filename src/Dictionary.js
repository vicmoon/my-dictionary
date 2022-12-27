import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from  "./Result.js";  


export default function Dictionary(){
let [keyWord, newKeyWord]= useState("");
let [result, newResult]= useState(null);


function handleResponse(response){
    newResult(response.data[0]);
    // console.log(response.data[0].meanings[0].definitions[0].definition);

   }

   function searchWord(event){
    event.preventDefault();
  
     //document from: https://dictionaryapi.dev/ 

     let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
     axios.get(apiURL).then(handleResponse);
   }
   

function handleSearch(event){
newKeyWord(event.target.value);

   }

    return (
        <div className="dictionary">
            <form onSubmit={searchWord}> 
            <input
            placeholder="Type a word"
            type="search"
            onChange={handleSearch}
            /> </form>
        
            <Result results={result} />
        
        </div>
    );
}