import React from "react";
import pics from '../pics/Rick and Morty.jpg'
export default function Homepage(){
    return(
        <div className = 'home-container relative'>
        <h1 className = 'absolute text-gray-50 m-auto top-20 right-0 bottom-0 left-0 text-5xl'>Watch Rick and Morty!</h1>
        <img className="w-full" src ={pics}/>
        </div>
        
    )
}