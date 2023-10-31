import React from 'react';
import Facebook from './images/Facebook.png';
import Twitter from './images/download.png';
import Instagram from "./images/Instagram.webp";
import "./info.css";

export default function Info() {
  
  const text = "What's new !";
  const text1 = "music++ is a digital music and video service that gives you access to millions of songs and other content from creators all over the world. Basic functions such as playing music are totally free";
  const text2 = "Youtube";
  const text3 = "Architecture:x86";
  const text4 ="About";
  const text5 ="Follow_US";
  
return (
   <>
    <div className='info'>{/*main background*/}
      <span className='text'>MusiX</span>
          
            <div className='bg'>{/*white transparent background*/} 
              <div className='container'> {/* raw */}

                   {/*What’s new Column*/}
                       <ul>
                         <br/>                  
                            <div style={{fontSize:20,color:'#00e1ff'}}>{text}</div>
                            <div className='text2'><li>{text2}</li></div>
                            <div className='text3'><li>{text3}</li></div>  
                       </ul> 

                    {/*About Column*/}  
                      <ul>         
                           <div style={{fontSize:20,color:'#00e1ff'}}>{text4}</div>
                           <div className='textz'>{text1}</div>
                      </ul>

                    {/*Follow US Column*/} 
                      <ul>              
                           <div style={{fontSize:18,color:'#00e1ff'}}>{text5}</div><br/> 
                           <img className='iconfb' src={Facebook} alt='facebook'/>
                           <img className='icon' src={Twitter} alt='twitter'/>
                           <img className='icon' src={Instagram} alt='instagram'/>
                     </ul> 

              </div>
          </div> 
      </div>
    </> 
  )
}
