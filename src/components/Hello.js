import React from 'react';

// function Hello(props){
//     return(
//         <div className="hello">
//             <h1>hi {props.name}</h1>
//         </div>
//     );
// }

const Hello = props => {
    return(
    <div className="hello">
        <h1>hi {props.name} {props.lastname}</h1>
        {props.children}
    </div>
    );
}  



export default Hello;