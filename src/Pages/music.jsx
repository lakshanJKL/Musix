import React from 'react';
import Playlist from '../Components/playlist';
import "./music.css";


export default function Music() {
  
    const style ={
       color:'white',
       fontSize:35,
    };

    const list={
       color:'white',
       fontSize:20,
       marginLeft:10,
       marginTop:10,
    };

return (
    <>
      <div className='music'>{/*main background*/}
         <div className='container'>{/* raw */}  
                <div className='bgi'> {/*blue transparent background*/}
                   <ul>
                       <span style={style}>PlayLists</span>
                          <div className='verline'>
                              <div style={list}>English</div>
                              <div style={list}>Sinhala</div>
                              <div style={list}>Sound_Track</div>
                              <div style={list}>Rap</div>
                              <div style={list}>Classic</div>
                          </div>  
                    </ul>
                </div>
              <div className='plist'><Playlist /></div>  {/* Calling the playlist.jsx component */}
          </div> 
       </div>
    </>
  )
}
