import React from 'react'

function Names(props) {
    return (
        <div>
           <h1>{props.names.name} {props.names.age}</h1> 
        </div>
    )
}

export default Names;
