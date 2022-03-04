import React from 'react'
import "./Button.css"

const Button = (props) => {
    return (
        <>
            <button className='Button' onClick={props.function}>
                {props.name}
            </button>
        </>
    )
}

export default Button
