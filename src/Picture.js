import React from 'react';
import Nedry from './img/DNedry.gif';

export default function Picture(pic){
    if (pic){
        return(
            <div className='picture'>
                <img scr='/' />
            </div>
        );
      
    }else{
        return(
          
                <img scr={Nedry} />
        
        );
     
    }
    
}