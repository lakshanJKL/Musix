import React from 'react';
import "./home.css";

export default function Home() {
  
return (
   <>
     <div className='home'>{/*main background */}
       <span className='text1'>MusiX</span>
            <div className='container'> 
                <div className='vbox'></div>
                        <div className='verline1'></div>
                        <div className='verline2'></div>
                        <div className='verline3'></div>
                        <div className='verline4'></div>
                  <div className='verline5'>
                     <ul>
                        <div className='textz1'>Music</div> 
                        <div className='textz2'>Brings</div>
                        <div className='textz3'>Pleasure</div> 
                     </ul>
                  </div>
            </div>
       </div>
    </>
  )
}
