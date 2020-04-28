import React,{Component} from 'react';

class Message extends Component{
    constructor(){
        super();
        this.state={message:"hello there!"};
    }
    clickedMe(){
        this.setState({message:'Clicked me'});
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.clickedMe()}>click me!</button>
            </div>
        );
    }
}

export default Message;