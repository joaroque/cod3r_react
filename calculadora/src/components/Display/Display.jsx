import './Display.css';
import React from "react";

function Display(props) {
    return (
        <div className='Display'>
            {props.value}
        </div>
    )
}

export default Display;