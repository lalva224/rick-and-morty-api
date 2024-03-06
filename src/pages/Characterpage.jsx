import axios from 'axios'
import { useContext, useEffect,useState } from 'react'
import Character from '../Components/Character'
import { Outlet, useOutletContext } from 'react-router-dom'
import { MyContext } from '../App'
import { createContext } from 'react'

export const DisplayStarContext = createContext(false);

export default function Characterpage(){
    const {favoriteChar,charData} = useContext(MyContext)
    const renderedData = charData.map((character) => (
       
        <Character
        key={character.id}
        id={character.id}
        name={character.name}
        status={character.status}
        species={character.species}
        type={character.type}
        image={character.image}
      />

      ));

  
      return (
        <>
          <div className="flex flex-wrap">
            {renderedData}
          </div>
        </>
      );
}