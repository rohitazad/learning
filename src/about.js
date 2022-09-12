import React from 'react';
import {useContextAPI} from './Context/Context';

import Leftpage from './left';

const AbooutPage = ({text})=>{
    let {
        state:{count},  
        dispatch} = useContextAPI();
        let no = count
    //console.log('useContextAPI', state)
    return (
        <>
            I m ABout Page 
            <br />
            <br />
            Hello:- i m  {text}
            <hr />
                <div>Number is {no}</div>
            <button onClick={()=>{ dispatch({
                type:'ADD_TO_NUMBER'
            })}}>+</button> 
            <button onClick={()=>{dispatch(
                {
                    type:'MINES_TO_NUMBER'
                }
            )}}>-</button>
            <Leftpage />
        </>
    )
}

export default AbooutPage;