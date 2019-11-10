import React, { Component } from "react";

import { connect } from "react-redux";

class SimpleReactWithReduxChild extends Component {
    render() {
      return (
        <div className="App">
          <div className="Age-label">
            your age: <span>{this.props.age}  {this.props.ages}</span>
          </div>
          <button onClick={this.props.onAgeUp}>Age UP</button>
          <button onClick={this.props.onAgeDown}>Age Down</button>

          
          {this.props.history.map( (his)=>{
           return <li key = {his.id} onClick = { ()=> this.props.delete(his.id)}>age : {his.age}</li>//we have to make the this events into the the their reducer bcs the id of the li will be get into the reducer for delete from the source(reducer)
          } )}



        </div>
      );
    }
  }
  
  const mapStateToProps = state => {
    return {
      age: state.age,
      history : state.history
    };
  };
  
  const mapDispachToProps = dispatch => {
    return {
      onAgeUp: () => dispatch({ type: "INCREAMENT", val: 1 }),
      onAgeDown: () => dispatch({ type: "DECREAMENT", val: 1 }),
      delete : (id)=>dispatch({type : "delete", id })
    };
  };
  export default connect(
    mapStateToProps,
    mapDispachToProps
  )(SimpleReactWithReduxChild);