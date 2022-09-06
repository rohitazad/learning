import React from 'react';

import Leftpage from './left';

const AbooutPage = ({text})=>{
    return (
        <>
            I m ABout Page 
            <br />
            <br />
            Hello:- i m  {text}
            <Leftpage />
        </>
    )
}

export default AbooutPage;