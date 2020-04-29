import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'parent'
        }

        this.clicked = this.clicked.bind(this);
    }

    clicked(value){
        alert('hi ' + this.state.message + value);
    }
    
    render() {
        return (
            <div>
                <ChildComponent clicked={this.clicked}/>
            </div>
        )
    }
}

export default ParentComponent
