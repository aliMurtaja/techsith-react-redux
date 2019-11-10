const InitialState = {
    a : 1
}

export const Reducera = (state = InitialState, action) =>{
    
    const newState = {...state}
     if(action.type === "UPDATE_A"){
        return {
            ...state,
            a : state.a + action.b
            //in this position, b will not be updated bcs b has their itself state from reducer b 
            // and we have put in the component in mapstatetoprops(b: rb.b)
        }
    }

    // console.log("reducer "+newState)
    return newState;

}