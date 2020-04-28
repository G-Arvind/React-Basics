import React,{Component} from 'react';
import Hello from './Hello';

class HelloClass extends Component{
    render(){
    return (
    <div>
    <h1>Component {this.props.name} {this.props.lastname}</h1>
    {this.props.children}
    </div>
    );
    }
}

export default HelloClass;