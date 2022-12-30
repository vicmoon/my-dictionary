import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from  "./Result.js";  
import Photos from "./Photos";


export default function Dictionary(props){
let [keyWord, newKeyWord]= useState("");
let [result, newResult]= useState(null);
let [photos, setPhotos] =useState(null);



function handleResponse(response){
    newResult(response.data[0]);
    // console.log(response.data[0].meanings[0].definitions[0].definition);

   }

   function handleSubmit(event){
    event.preventDefault();
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
     axios.get(apiURL).then(handleResponse);
    
    
   }

   function handlePexelResponse(response){
    console.log(response.data.photos);
    setPhotos(response.data.photos);
   }


   function handleSearch(event){
    newKeyWord(event.target.value);

   }


   let pexelAPIKey= "563492ad6f91700001000001f497aebcf68d4e9daa411917c89f133c" ;
   let pexelAPIUrl=`https://api.pexels.com/v1/search?query=${keyWord}&per_page=9`;
   let headers ={Authorization: `Bearer ${pexelAPIKey}`} ;
   axios.get(pexelAPIUrl, {headers:  headers}).then(handlePexelResponse);


    return (
        <div className="dictionary">
            <section> 
            <form onSubmit={handleSubmit}> 
            <input
            placeholder="Type a word like: truth, word, sun, music, wisdom..."
            type="search"
            onChange={handleSearch}
            /> </form>
            <div className="hint">
            
            </div>
           </section>

            <Result results={result} />
            <Photos photos={photos} />
        </div>
    );

}