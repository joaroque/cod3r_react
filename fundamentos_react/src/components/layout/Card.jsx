import './Card.css';
import React from 'react';

export default (props) => {

    const style = {
        backgroundColor: props.color || 'rgb(106, 65, 201)',
        borderColor: props.color || 'rgb(106, 65, 201)'
    }

    return (
        <div className='card' style={style}>
            <h2 className='title'>{props.titulo}</h2>

            <div className='content'>
                {props.children}
            </div>
        </div>
    )
}