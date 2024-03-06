import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/Homepage'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import { createContext } from 'react'

export const MyContext = createContext({})


function App() {
  const [count, setCount] = useState(0)
  const [favoriteChar,setFavoriteChar] = useState([])
  const [availableStars,setAvailableStars] = useState(4)
  const [charData,setCharData] = useState([])
  const [clickedFavorite,setClickedFavorite] = useState(false)

   async function getCharacter(){
    const response = await axios.get('https://rickandmortyapi.com/api/character/')
    const data = response.data
    setCharData(data.results)
   
  
  }
  const isComponentClicked = (id)=>{
    setAvailableStars(availableStars=>availableStars-1)
    let fav_chars = charData.filter(char=>char.id==id)
    // ... means all the elements. We want to merge all the elements, not elements from previous and a separate array.
    setFavoriteChar(prevChar=>[...prevChar,...fav_chars])
}
const isComponentUnClicked = (id)=>{
    //keep only those that dont have this id
    setAvailableStars(availableStars=>availableStars+1)
    let fav_chars = favoriteChar.filter(char=>char.id!=id)
    setFavoriteChar(fav_chars)
  
}
useEffect(()=>{
  getCharacter();
},[])

// useEffect(()=>{
//   console.log(favoriteChar);
// },[favoriteChar])
  return (
    <>
      <Navbar charData = {charData}/>

      <MyContext.Provider value = {{favoriteChar,setFavoriteChar,availableStars,isComponentClicked,isComponentUnClicked,charData,clickedFavorite,setClickedFavorite}}>
           <Outlet/>
      </MyContext.Provider>
      
      
    </>
  )
}

export default App
