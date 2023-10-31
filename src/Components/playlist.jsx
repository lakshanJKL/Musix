import React from 'react';
import Long from "./audio/as long as you love me.mp3";
import Pretty from "./audio/Pretty_Please.mp3";
import Levitating from "./audio/Levitating.mp3";
import Love from "./audio/Love_Again.mp3";
import UP from "./audio/UP.mp3";
import Rain from "./audio/rain over me.mp3";
import { useRef } from "react";
import { useState } from 'react';
import {FaForward } from 'react-icons/fa';
import {FaBackward} from "react-icons/fa";
import "./playlist.css";

export default function Playlist() {

const aduioRef = useRef(null); 
const [currentSong, setCurrentSong] =useState(null);
   
const playMusic =(song)=> {
  aduioRef.current.src= song;
  aduioRef.current.play();
  setCurrentSong(song);
  };


//link to Youtube 
const YoutubeClick = () => {
 
    if(currentSong===Long){
      
      window.open("https://www.youtube.com/watch?v=0Gl2QnHNpkA");
    }
    else if(currentSong===Pretty){
      
      window.open("https://www.youtube.com/watch?v=ylzhMn6MlVc");
      }
    else if(currentSong===Levitating){
      
      window.open("https://www.youtube.com/watch?v=TUVcZfQe-Kw");
        }
    else if(currentSong===Love){
      
      window.open("https://www.youtube.com/watch?v=BC19kwABFwc");
      }  
    else if(currentSong===UP){
      
      window.open("https://www.youtube.com/watch?v=eZlQeaTL-y4");
      } 
    else if(currentSong===Rain){
      
      window.open("https://www.youtube.com/watch?v=SmM0653YvXU");
        }    
    };



    
//forward & backward   
const [list] = useState([Long,Pretty,Levitating,Love,UP,Rain]);
const [nextindex,setnextindex]=useState(0);

const nextbtn =()=>{ 
  const moveindex = (nextindex+1) % list.length;
  setnextindex (moveindex);
  playMusic(list[moveindex]);
  };
    
const backtbtn =()=>{
  const moveindex = (nextindex-1+list.length) % list.length;
  setnextindex (moveindex);
  playMusic(list[moveindex]);
  };
 
return (
    <>
        <div>
           <span className='titletext' ># POPULAR</span>

            {/*songs playlist */}
                 <ol>
                    <li className ='textsongz' onClick={()=>playMusic(Long)} onDoubleClick={YoutubeClick}>
                        As long as you love me |Backstreet Boys
                      </li>               
                    <li className ='textsong' onClick={()=>playMusic(Pretty)} onDoubleClick={YoutubeClick}>
                        Pretty_Please |Dua Lipa
                      </li>     
                    <li className ='textsong' onClick={()=>playMusic(Levitating)} onDoubleClick={YoutubeClick}>
                        Levitating |Dua Lipa
                      </li>             
                    <li className ='textsong' onClick={()=>playMusic(Love)} onDoubleClick={YoutubeClick}>
                        Love_Again |Dua Lipa
                      </li>             
                    <li className ='textsong' onClick={()=>playMusic(UP)} onDoubleClick={YoutubeClick}>
                        UP |Inna
                      </li>                  
                    <li className ='textsong' onClick={()=>playMusic(Rain)} onDoubleClick={YoutubeClick}>
                        Rain over me |Pitbull ft Marc Anthony
                      </li>    
                </ol>
             
            {/*audio player */}
                 <div className='contraner'>{/* raw */} 
                    <button className='btnz'  onClick={backtbtn}><FaBackward/></button> {/* backward button */}

                      <audio className='plyer' ref={aduioRef} controls>
                      <source src={list[nextindex]} type="audioMp3"/>
                      </audio>

                    <button className='btnz' onClick={nextbtn}><FaForward/></button> {/* forward button */}
                 </div>

        </div> 
    </>
  )
}