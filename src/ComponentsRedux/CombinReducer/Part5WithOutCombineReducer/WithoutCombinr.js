import React, { Component } from "react";
import {connect} from 'react-redux';
 

class WithoutCombinr extends Component {
    render(){
        return(
            <>
                A:  {this.props.a}  B:  {this.props.b}

                <button onClick ={this.props.updateA}>UpdateA</button>
                <button onClick ={this.props.updateB}>UpdateB</button>
            </>
        )
    }
}

// const mapDispatchtoProps = (dispatch)=>{
//     return{
//         UpdateA : dispatch({type : "UpdateA"}),
//         UpdateB : dispatch({type : "UpdateB"})
//     }
// }

const mapDispachToPropss = dispach => {
    console.log("disp")
    return {
      updateA: ()=> dispach({ type: "UPDATE_A" }),
      updateB: ()=> dispach({ type: "UPDATE_B" })

      //in above, if i not put (()=>), it will directally execute the dispatch func
    };
  };

const mapStatetoProps = (returnObject)=>{
    console.log("mapstateprops "+returnObject)
    return{
        a : returnObject.a,
        b : returnObject.b
    }
}


export default connect(mapStatetoProps, mapDispachToPropss)(WithoutCombinr); 