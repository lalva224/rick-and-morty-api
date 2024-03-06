import React, { useEffect } from "react";
import { Nav } from "react-bootstrap";
import {Link,NavLink,Outlet, useNavigate} from 'react-router-dom'
import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../App";

export default function Navbar({charData}){
    const navigate = useNavigate();
    const [formData,setFormData] = useState();
    // console.log(charData)
    const handleSearch = (event)=>{
        // event.preventDefault();
        let choice = null
        charData.forEach((char)=>{
            // console.log(char.name.toLowerCase());
            
            let short_name = char.name.toLowerCase();
            if(short_name==formData){
                console.log(char.id)
                choice = char.id
            }
        })
        if(choice==null){
            alert('invalid choice')
        }
        navigate(`/characters/${choice}`)

    }
    return (
        <>
          
            <nav>
                <div className=" bg-cyan-600 flex justify-around">
                <Link className = 'text-gray-900 font-bold text-xl no-underline'to = "/">Home</Link>
                <Link className = 'text-gray-900 font-bold text-xl no-underline'to ="/characters">Characters</Link>
                <Link className= 'text-gray-900 font-bold text-xl no-underline' to = "/favoritecharacters">Favorite Characters</Link>
                <Link className= 'text-gray-900 font-bold text-xl no-underline' to = "/aboutme">About Me</Link>
                <form onSubmit={handleSearch}>
                  <input onChange = {(event)=>setFormData(event.target.value)}placeholder="Search For a Character"/>
                  <input type = "submit" value = "Enter"/>
                </form>
               
                </div>
                

            </nav>
            

        </>
    )
}