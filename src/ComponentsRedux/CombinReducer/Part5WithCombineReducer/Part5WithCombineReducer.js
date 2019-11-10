import React, { Component } from "react";
import WithCombinr from './WithCombinr';
import {Store} from '../Part5WithCombineReducer/Store/CombineReducer';
import {Provider} from 'react-redux'


export class Part5WithCombineReducer extends Component {
    render(){
        return(
            <>
                <Provider store = {Store}>
                    <WithCombinr />
                </Provider>
            </>
        )
    }
}