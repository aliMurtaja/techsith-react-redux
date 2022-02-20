


// in this example we use the local state of the component, that is not same the for the all component 
// bcs every component have their local state that nothing to do with any other components

// to fix it we have to use the globle state(state of the store) in the next part (NEXT FILE OF THE THIS FOLDER)

import React, { Component } from "react";

export class SimpleReact extends Component {

    constructor(props){
        super(props)

        this.state ={
            age : 12, 
            // ages :null
        }

        // this is comment
    }

    ageDown = () =>{
       // experiment 3 (start)
       let ob1 = {...this.state}
       console.log(ob1)
       // experiment 3 (end)

       
        this.setState({
            // experiment 1 (start)
            // age : 2  //this not gonnna be mutate but copy
            
            // ages : --this.state.age, //in which we mutate the state directally
            // in this position if we print the ages and age both show the same result
            // experiment 1 (end)  line added

            
            
            
            // experiment 2 (start)
            
            // ...this.state,  //we copy it in the object of setState (lekin isse niche wali line me koi fark nahi para) 
            // ages:++this.state.age //in this line we mutate the state directally
            // bcs above line(...this.state) se koi fark nahi para
            // so this line(age:++this.state.age) in which (age of this.state.age is real age of setState)
            
            // to fix it, we have to copy it outside the object(setState)

            // 
            // experiment 2 (end)

            // 
            // experiment 3 (start)
            // ages : --ob1.age,    //this give us the same result bcs ob1.age is alway has the 12 value
            // and here we make (ages) new copy 
            // and if we write the (age : --ob1.age), then we make the new copy of the age
            // experiment 3 (end)



            // experiment 4 (start)
            age : --ob1.age    // we write the (age : --ob1.age), then we make the new copy of the age
            // experiment 3 (end)
            



        })
    }

    ageUp = ()=>{

    } 

    render(){  
        return(
            <>
                age : {this.state.age} <br />
                ages : {this.state.ages} <br />
                {/* <button onClick= {ageUp}>ageUp</button> */}
                <button onClick = {this.ageDown}>ageDown</button>
            </>
        )
    }

}

