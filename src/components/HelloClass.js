import React,{Component} from 'react';
import Hello from './Hello';

class HelloClass extends Component{
    render(){
        const {name, lastname} = this.props;
    return (
    <div>
    <h1>Component {name} {lastname}</h1>
    {this.props.children}
    </div>
    );
    }
}

export default HelloClass;