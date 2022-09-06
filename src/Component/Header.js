import React from 'react';
import {Link} from 'react-router-dom';

const HeaderCompo = ()=>{
    return (
        <>
            I m header
            <br />
            <Link to="/">Home page</Link>|| 
            <Link to="/about">About page</Link>|| 
            <Link to="/contact">Contact page</Link>|| 
            <hr />
        </>
    )
}

export default HeaderCompo;