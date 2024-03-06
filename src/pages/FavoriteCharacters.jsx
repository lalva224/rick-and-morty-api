import React, { useEffect } from "react";
import Character from "../Components/Character";
import { useContext } from "react";
import { MyContext } from "../App";

export default function  FavoriteCharacters(){
    const {favoriteChar} = useContext(MyContext)
    console.log("Inside fav")
    useEffect(()=>{
        // console.log(favoriteChar.length)
    },[favoriteChar])
    console.log(favoriteChar.length)

    const renderFavChar =favoriteChar.map((character)=>(
               
            <Character 
            key = {character.id} 
             id = {character.id} 
             name = {character.name} 
             status = {character.status} 
             species = {character.species}
              type = {character.type} 
              image = {character.image}/>               
       
   ))
    
    return(
        <>
        
                 <div className="flex flex-wrap">
                    {renderFavChar}
            </div>
        

        </>
    )
}