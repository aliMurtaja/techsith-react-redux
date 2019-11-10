import React, { Component } from "react";

import { connect } from "react-redux";

class SimpleReactWithReduxChild extends Component {
  constructor(props){
    super(props)
    console.log("cons")
  }
  componentWillMount(){
    console.log("will")
  }
  componentDidMount(){
    console.log("did")
  }
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
    console.log("mapState")
    return {
      age: state.age
    };
    
  };
  
  const mapDispachToProps = dispatch => {
    console.log("dis")
    return {
      onAgeUp: () => dispatch({ type: "INCREAMENT", val: 1 }),
      onAgeDown: () => dispatch({ type: "DECREAMENT", val: 1 })
    };
  };
  export default connect(
    mapStateToProps,
    mapDispachToProps
  )(SimpleReactWithReduxChild);