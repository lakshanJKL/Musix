import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/home';
import Info from './Pages/info';
import Music from './Pages/music';
import Navibar from './Components/navibar';



export default function Musicapp() {
  return (
    <div>
       <BrowserRouter>
         <Navibar/>
           <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/info' element={<Info/>}/>
               <Route path='/music' element={<Music/>}/>
           </Routes>   
       </BrowserRouter> 
    </div>
  )
}
