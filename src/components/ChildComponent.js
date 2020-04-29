import React from 'react'

export default function ChildComponent(props) {
    return (
        <div>
            <button onClick = {()=>props.clicked(" child")}>click</button>
        </div>
    )
}
