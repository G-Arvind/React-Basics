import React from 'react';


const Hello = props => {
    const {name, lastname} = props;
    return(
    <div className="hello">
        <h1>hi {name} {lastname}</h1>
        {props.children}
    </div>
    );
}  



export default Hello;