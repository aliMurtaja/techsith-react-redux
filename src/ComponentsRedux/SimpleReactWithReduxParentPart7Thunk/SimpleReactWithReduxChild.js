import React, { Component } from "react";

import {AgeUp, AgeDowm} from './Store/Action/Aciton'

import { connect } from "react-redux";

class SimpleReactWithReduxChild extends Component {
    render() {
      return (
        <div className="App">
          <div className="Age-label">
            your age: <span>{this.props.age}</span>
          </div>
          <button onClick={this.props.onAgeUp}>Age UP</button>
          <button onClick={this.props.onAgeDown}>Age Down</button>
        </div>
      );
    }
  }
  
  const mapStateToProps = state => {
    return {
      age: state.age
    };
  };
  

  //for use the thunk, we wrap the action with another func and use the async things on them
  //we use this in another file that is called action Creater
  const mapDispachToProps = dispatch => {
    return {
      onAgeUp: () => dispatch(AgeUp()),
      onAgeDown: () => dispatch(AgeDowm())
    };
  };
  export default connect(
    mapStateToProps,
    mapDispachToProps
  )(SimpleReactWithReduxChild);