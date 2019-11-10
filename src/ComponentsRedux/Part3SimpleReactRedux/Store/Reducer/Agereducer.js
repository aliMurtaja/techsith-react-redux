// this reducer that will be store into the Store object using createStore()
// this is pure func bcs it can not muted the external resourses
// the state in this reducer we have used is their local state not the outer state
// this is called reducer bcs it take the old state and opration with the new state and give the result

const initialState = {
    age:20
};


export function Agereducer(state = initialState, action){
    
    const newStateOfStore = {...state}

    switch(action.type){

        case 'INCREAMENT':
           newStateOfStore.age = newStateOfStore.age + action.val
           return newStateOfStore;
        
        //    return 1+1;  //this give us Err bcs we use the object in child component (ex --> state.age)
        // return {  //this give us Right result
        //     age : 33
        // }
        case 'DECREAMENT':
            newStateOfStore.age = newStateOfStore.age - action.val;
            return newStateOfStore;
        default: 
            return newStateOfStore;            

    }
}