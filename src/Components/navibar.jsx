import React from 'react';
import "./navibar.css";
import { useNavigate } from 'react-router-dom';
import {ImHome} from "react-icons/im";
import {FaMusic} from "react-icons/fa";



export default function Navibar() {
  
 const navigate =useNavigate();
  
return (
    <>
      <div className='navi'>{/*main background*/}
        <div className='space'>{/*range between buttons and backgrounds*/}
          <button className='btn' onClick={()=>navigate('/music')}><FaMusic/></button>
          <button className='btn' onClick={()=>navigate('/')}><ImHome/></button>
          <button className='btn' onClick={()=>navigate('/info')}>Info</button> 
        </div>
      </div>
   </>
  )
}

