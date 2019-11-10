export const ageUpAsync = () =>{
    return{ 
        type: "INCREAMENT", 
        val: 1 
    }
}

// make ageUpAsync async
// this pattern all care through redux thunk
export const AgeUp = () =>{
    return dispach =>{
        setTimeout(()=>{
            dispach(ageUpAsync())           
        }, 3000)
    }
}


export const AgeDowm = () => {
    return{ 
        type: "DECREAMENT", 
        val: 1 
    }
} 