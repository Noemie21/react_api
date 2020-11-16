import React, { useState } from 'react'

function CustomButton(props) {
    let [clicked, setClicked] = useState(false)

    return <button 
    disabled={clicked}
    onClick={() => {
        setClicked(true)
        if ( props.onClick) {
            props.onClick()
       }
    }}
    
    style={{
        background: clicked ? 'grey' : '#76BCF6',
        borderRadius: '10px',
        padding:'6px',
        color:'white'
    }}

    > 
        {props.children}
    </button>
}

export default CustomButton