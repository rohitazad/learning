import React, { useState, useEffect } from 'react';

const StateMangeCoponent = ({text, updateTxt})=>{
    // State mantain 
    

    let [no, setNo] = useState('hello');
    

    // setate update here 
    const handleChange = (e)=>{
        // console.log(e.target.value);
       return  updateTxt(e.target.value)
    }

    // action button pick the curent state 
    const handleSubmit = ()=>{
       // let myyvalue = text ;
       return setNo(text)

    }



    // lifecycle hook 
    // 1. App render  ___ first app load
    // 2. app update ___    
    // 3.  App distroye
    useEffect(()=>{
        console.log('useeffect loading ___ 1 app load')
    }, [])

    // when sate upate then call to this effect
    useEffect(()=>{
        console.log('update the app __ 2')
    }, [no])

    // App destoyye
    useEffect(()=>{
        console.log('update the app __ 3');
        return ()=>{
            return true;
        }
    }, [no])

    return (
        <>
            <div>Hello i m State </div>
            <input type="text" value={text} onChange={(e)=>{handleChange(e)}}  placeholder="enter name " />
            <div className="">
                Here show to input text :-  ___{text} <span></span>
            </div>
            <br />
                {no}

            <button onClick={()=>{handleSubmit()}} type="button"> Submit </button>


        </>
    )
}


export default StateMangeCoponent;