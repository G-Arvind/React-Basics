import React from 'react'

function InlineStyle() {

    const style={
        color:'blue',
        fontSize:'100px'
    }

    return (
        <div>
            <h1 style={style}>world</h1>
        </div>
    )
}

export default InlineStyle
