import React from 'react'

export default (props) => (
    <div>
        <span>{props.nome} </span>
        <span><strong>{props.idade}</strong> </span>
        <span>{props.nerd ? 'Nerd' : 'Mundinho'} </span>
    </div>
)