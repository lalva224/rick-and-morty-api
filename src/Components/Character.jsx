import React, { useEffect,useContext } from "react";
import {NavLink,useNavigate, useParams} from 'react-router-dom'
import { useOutletContext } from "react-router-dom";
import unclicked_star from '../pics/unclicked star.png'
import clicked_star from '../pics/clicked star.png'
import { useState } from "react";
import { MyContext } from "../App";

export default function Character({id,name,status,species,type,image}){
    const navigate = useNavigate();
    const [clicked,setClicked] = useState(false)
    const {availableStars,isComponentClicked,isComponentUnClicked,favoriteChar} = useContext(MyContext)

//     let availableStars = null;
//    let isComponentClicked = null;
//     let isComponentUnClicked = null;
//    let favoriteChars = null;
   
    
    
    // if(favoriteChars!=undefined){
    //     console.log(data.favoriteChars)
    // }
    
    // console.log(favoriteChars)
    

    const handleClick = ()=>{
        //if trying to go from clicked to unclicked then no restrictions
        if(clicked){
            setClicked(false)
        }
        if(availableStars>=1){
            setClicked(!clicked)
            isComponentUnClicked(id)
        }
    }
     //when the page initally renders( maybe after clicking on another page) -> perform the check: is it in favoriteCharacters, if so: set Clicked to True
    useEffect(()=>{
        if(favoriteChar!=null){
            
            const isFavorite = favoriteChar.some((char)=>char.id==id)
            if(isFavorite){
                console.log("setting clicked to true")
                setClicked(isFavorite)
            }
          
        // }
        }
                   
    },[])

    // every time something is clicked then render this. Otherwise it renders on any update and could go off into an infite loop
    useEffect(()=>{
        
         console.log(favoriteChar)

        //will only add to favorites if not already in it
        if(clicked && !favoriteChar.some(char=>char.id==id)){
            console.log('adding to list')
            isComponentClicked(id)
        }
        //if at least 1 star is clicked this is currently set to unclick then remove it. First condition bc initialy clicked set to false.
        if(availableStars<4 && !clicked){
            console.log("removing from list")
            isComponentUnClicked(id)
        }
        
    },[clicked])

   
    
   
    return(
        <>
            <div className="card w-[18rem]" >
            <img className="card-img-top" src={image} alt="Card image cap"/>
                <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{status}</h6>
                <h6>{species}</h6>
                {
                    type &&
                    <h6>{type}</h6>
                }
                <button onClick={handleClick}>
                    {
                        clicked? (
                            <img className="ml-[15rem] w-[10%]" src ={clicked_star} />
                        ):(
                            <img className="ml-[15rem] w-[10%]" src = {unclicked_star}/>
                        )
                    }
               
                </button>
                
                <button className="btn btn-primary" onClick={()=>navigate(`/characters/${id}`)}>More Details</button>
                {/* <NavLink to = {`/characters/${id}`} >More Details</NavLink> */}
                </div>
            </div>
        </>
    )
}