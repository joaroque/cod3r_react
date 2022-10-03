import './Button.css'
import React from 'react'

function Button(props) {
    return(
        <button 
            onClick={()=> {
               props.click && props.click(props.label)
            }}
        
            className={`
                ${props.operation ? 'operation' : ''}
                ${props.double ? 'double' : ''}
                ${props.triple ? 'triple' : ''}
            `}>
            {props.label}
        </button>
    )
}

export default Button;