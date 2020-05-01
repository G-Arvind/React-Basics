import React, { Component } from 'react'

 class Greeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggenIn:false
        }
    }
    
    render() {

        /*ternary operator*/
        return(
            this.state.isLoggenIn  ?  <div>Welcome Arvind</div> :  <div>Welcome Guest</div>
        )

        /*short circuit operator */

        return this.state.isLoggenIn && <div>Welcome Arvind</div>
        
        /* Variable */
        let message;

        if(this.state.isLoggenIn){
            message = <div>Welcome Arvind</div>
        }else{
            message = <div>Welcome Guest</div>
        }
        return (
            message
        )
        
    }
}

export default Greeting;

