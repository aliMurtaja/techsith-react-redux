import React from 'react';
// import reducer from './store/reducer';
import SimpleReactWithReduxChild from './SimpleReactWithReduxChild'
import Store from './Store/Store'

import { Provider } from 'react-redux';

const Events = () =>{
    return (
        <>
             <button onClick = { ()=>Store.dispatch({type : 'INCREAMENT',   val : 1}) }>INCREMNTSaa</button>

             <button onClick = { ()=>Store.dispatch({type : 'DECREAMENT', val : 1}) }>DECREMNTS</button>

             {/* <button onClick = { ()=>Store.dispatch({type : 'INCREAMENT'}) }>INCREMNTSwITHhANDLER</button>  */}
        </>
    )
} 

export const SimpleReactWithReduxParentPart3 = () => {
    return(
        <>
            <Provider store = {Store}>
                <div>
                    <SimpleReactWithReduxChild  />
                    <Events />
                </div>  
            </Provider>
        </>
    )
}