import React, { Component } from "react";
import {connect} from 'react-redux';
 

class WithCombinr extends Component {
    render(){
        return(
            <>
                A:  {this.props.a}  B:  {this.props.b}

                <button onClick ={()=> this.props.updateA(this.props.b)}>UpdateA</button>
                <button onClick ={ ()=> this.props.updateB(this.props.a)}>UpdateB</button>
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
      updateA: (b)=> dispach({ type: "UPDATE_A" , b: b}),
      updateB: (a)=> dispach({ type: "UPDATE_B", a: a })

      //in above, if i not put (()=>), it will directally execute the dispatch func
    };
  };

const mapStatetoProps = (returnObject)=>{
    console.log(returnObject)
    console.log(returnObject.Ra)
    console.log(returnObject.Rb)
    return{
        a : returnObject.Ra.a,
        b : returnObject.Rb.b
    }
}


export default connect(mapStatetoProps, mapDispachToPropss)(WithCombinr); 

// export default WithCombinr;