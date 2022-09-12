import React, {useReducer, useContext} from 'react';
import {MyReducers} from './Reducer';


const NumberCart = React.createContext();

const ContextAPI = ({children}) =>{
    let myNumber = 0;

    // state and dispatch to context and reducer
    const [state, dispatch] = useReducer(MyReducers, {
        count:myNumber
    })
    return (
        <>
            <NumberCart.Provider  value={{state, dispatch}}>
                {children}
            </NumberCart.Provider>
        </>
    )
}


export default ContextAPI
export const useContextAPI = ()=>{
    return useContext(NumberCart);
}