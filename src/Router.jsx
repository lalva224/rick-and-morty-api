import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Aboutpage from './pages/Aboutpage.jsx'
import NotFoundPage from './pages/Notfoundapage.jsx'
import Characterpage from './pages/Characterpage.jsx'
import Navbar from './Components/Navbar.jsx';
import Homepage from './pages/Homepage.jsx';
import Characterdetails from './pages/Characterdetailspage.jsx';
import FavoriteCharacters from './pages/FavoriteCharacters.jsx';
import App from './App.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFoundPage/>,
    children: [
      {
        //indicate default child
        index:true,
        element: <Homepage/>
      },
      {
        path: '/aboutme',
        element : <Aboutpage/>
      },
      {
        path : '/characters',
        element: <Characterpage/>,

      },
      {
        path: '/characters/:id',
        element: <Characterdetails/>
      },
      {
        path: '/favoritecharacters',
        element: <FavoriteCharacters/>
      }
    ]
  },

  
  
  

])

export default router