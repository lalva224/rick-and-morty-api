import { useOutletContext, useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";
import { useContext } from "react";
import { MyContext } from "../App";

export default function Characterdetails(){
    const {id} = useParams();

    // const {favoriteChar,setFavoriteChar} = useContext(MyContext);
    const [charData,setCharData] = useState([])
    
    const getDetails = async ()=>{
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        const data = response.data
        setCharData(data)
        console.log(data)
    }
    useEffect(()=>{
        getDetails();
    },[])
    
    return(
        <>  
        {
            
            <div>
            <h1>{charData.name}</h1>
            <img className="m-auto w-[10rem]" src = {charData.image}/>
            <p>Status: {charData.status}</p>
            {
                charData.location &&
                <p>Location: {charData.location.name}</p>
            }
            {
                charData.origin &&
                <p>Origin : {charData.origin.name}</p>
            }
           
            
            <p>Species: {charData.species}</p>
            {
                
                Array.isArray(charData.episode)?(
                    <p>Episode first seen: {charData.episode[0]}</p>
                ):(
                        <p>Episode first seen: {charData.episode}</p>
                )

              
            }
            {
                 charData.type &&
                 <p>Type: {charData.type}</p>
            }
            

            

          

            </div>
}
            

        </>
    )
}