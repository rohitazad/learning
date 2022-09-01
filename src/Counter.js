import React, { useState } from 'react';



const CounterComponent = ()=>{

    let [number, setNumber] = useState(0);

    return (
        <>
            <button style={{width:"200px", fontSize:"54px"}}
                onClick={()=>{
                    return setNumber( number = number + 1 )
                }}
            >+</button>
            <div className="" style={{marginTop:"10px", fontSize:"54px"}}>
                {number}
            </div>
            <button 
                style={{width:"200px", fontSize:"54px"}}
                onClick={()=>{
                    return setNumber( number = number - 1 )
                }}
            >-</button>
        </>
    )
}


export default CounterComponent;