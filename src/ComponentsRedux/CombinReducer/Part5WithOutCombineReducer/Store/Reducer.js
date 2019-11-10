const InitialState = {
    a : 1,
    b : 1
}

export const Reducer = (state = InitialState, action) =>{
    
    const newState = {...state}
    
    if(action.type === "UPDATE_A"){
        return {
            ...state,
            a : newState.a + newState.b//this is not the above state(...state)
        }
    }
    // else if(action.type === "UPDATE_A"){
    //     return {
    //         ...state,
    //         a : state.a + state.b//this is not the above state(...state)
    //     }
    // }
    else if(action.type === "UPDATE_B"){
        return {
            ...state,
            b : state.a + state.b
        }
    }

    // console.log("reducer "+newState)
    return newState;

}