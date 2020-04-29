import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:'hello'
        }

        this.clicked = this.clicked.bind(this);
    }

    clicked(){
        this.setState({message:"clicked"});
    }
    
    render() {
        return (
            <div>
                {this.state.message}
                <button onClick={this.clicked}>click</button>
            </div>
        )
    }
}

export default EventBind
