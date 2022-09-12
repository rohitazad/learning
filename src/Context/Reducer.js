

export const MyReducers = (state, action)=>{
    //console.log('state', state, 'action', action)
    switch(action.type){
        case 'ADD_TO_NUMBER':
            return {...state, count:state.count + 1};
        case 'MINES_TO_NUMBER':
            return {...state, count:state.count - 1};
        default:
            return {...state}
    }
}
