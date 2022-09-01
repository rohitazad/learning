import React, { useState } from 'react';

const ClockComponent = ()=>{
    let time = new Date();
    let showTime = time.getHours() + ':' +time.getMinutes() + ':'+time.getSeconds();

    let [mytime, setMytime] = useState(showTime)

    
    const updateTime = ()=>{
        let _time = new Date();
        return (_time.getHours() + ':' +_time.getMinutes() + ':'+_time.getSeconds());
    }
    

    return (
        <>
           <div style={{fontSize:"140px"}}>
           {mytime}
           <button style={{fontSize:'10px'}}
            onClick={()=>{
                return setMytime(mytime = updateTime())
            }}
           >
               Click to update time
           </button>
           </div>
        </>
    )
}


export default ClockComponent;