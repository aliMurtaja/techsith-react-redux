const InitialState = {
    b : 1
}

export const Reducerb = (state = InitialState, action) =>{
    
    const newState = {...state}
     if(action.type === "UPDATE_B"){
        return {
            ...state,
            b : action.a + state.b
        }
    }

    // console.log("reducer "+newState)
    return newState;

}