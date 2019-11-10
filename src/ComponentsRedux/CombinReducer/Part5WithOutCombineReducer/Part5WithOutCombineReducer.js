import React, { Component } from "react";
import WithoutCombinr from './WithoutCombinr';
import {Store} from '../Part5WithOutCombineReducer/Store/Store';
import {Provider} from 'react-redux'


export class Part5WithOutCombineReducer extends Component {
    render(){
        return(
            <>
                <Provider store = {Store}>
                    <WithoutCombinr />
                </Provider>
            </>
        )
    }
}