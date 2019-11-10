// this reducer that will be store into the Store object using createStore()
// this is pure func bcs it can not muted the external resourses
// the state in this reducer we have used is their local state not the outer state
// this is called reducer bcs it take the old state and opration with the new state and give the result

const initialState = {
    age:20,
    history : []
};


export function Agereducer(state = initialState, action){
    
    // const newStateOfStore = state//this way mutate the state of the store directally 
    // thay y we can not show the result but see into the console

    const newStateOfStore = {...state}

    switch(action.type){

        case 'INCREAMENT':
           newStateOfStore.age = newStateOfStore.age + action.val;
           newStateOfStore.history = newStateOfStore.history.concat({id : Math.random(), age :state.age + action.val});
           return newStateOfStore;
        
        //    return 1+1;  //this give us Err bcs we use the object in child component (ex --> state.age)
        // return {  //this give us Right result
        //     age : 33
        // }
        case 'DECREAMENT':
            // newStateOfStore.age = newStateOfStore.age - action.val;
// alert()
            return {
                // newStateOfStore.age : newStateOfStore.age + action.val  //this is wrong syntex bcs left side of the : , we used newStateOfStore.age which is wrong instead of we use properties means single one (Ex age : '')

                // ...state,// we wright it or not there will nothing to do with mutation bcs below we only use it
                age : state.age - action.val ,//if we not copy(...state), it give us the abnormal result
                // and we did ++state.age also give us the weired result
                // we have to wright ++state.ages
                // note that from here we are not gonna mutate the state we only use it
                history : state.history.concat({id : Math.random(), age :state.age - action.val})
                
                // newStateOfStore.history : newStateOfStore.history.concat(newStateOfStore.age + action.val);
            }
            // return newStateOfStore;

        case  'delete' :

            // // 1) first that i understand
            // console.log(action);//if we want to check something into the console 
            // // dont ever ever forget to return of the state of the store that we used into the component
            // // that we did below last line

            // newStateOfStore.history = newStateOfStore.history.filter( (his)=> his.id !== action.id )   

            // return newStateOfStore;   
            
            
            //2)that i understand some more
            return {
                ...state, //if we not copy we only get the history from below 
                // and we not get the age so, we get the age is (NaN or Undefined)
                // history : 0,
                // in this position spread operatore will does-->
                // first of fall it make the copy of the object
                // and plase it like this --> {age : "20",  history : []}
                // after we wright the below line 
                history: state.history.filter((el)=> el.id !== action.id )
                // after the this line we have override the history of the state of the store from the above line

                // and lat we have return the modified history and same age behind the seen
              }
            
        default: 
            return newStateOfStore;            

    }
}