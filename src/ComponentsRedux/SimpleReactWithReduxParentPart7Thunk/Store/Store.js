// we impote the createStrore to make the store object
import {createStore, applyMiddleware} from 'redux';

// now we will import the all reducer (now our case only have one reducer that we would import)
import {Agereducer} from './Reducer/Agereducer'

// now we import the redux-thunk
import thunk from 'redux-thunk';



// following we make the Store object with the help of the CreateStore func
// this Store object will remail the whole their State 
// in the createStore(); we register the reducer 
// now we will import the Store that has the following things
// 1)whole state of the whole reducer
// 2)dispatch func
// 3)their subscribe() as well


// we use the middleware for thunk
// so whenever new action come first it go through the thunk middleware
let Store = createStore(Agereducer, applyMiddleware(thunk));

// subscribe() this is builte in func that give the whole state of the store
Store.subscribe( ()=>console.log(Store.getState()) );

export default Store;