import React from 'react'

export default function ParImpar(props) {
    const par = props.numero % 2 === 0 ? 'Par' : 'Impar'

    return (
        <div>
             <h2>{par}</h2>
        </div>
    )
}