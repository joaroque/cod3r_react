import React, { useState } from 'react'


export default function Input() {
    const [valor, setValor] = useState("Inicial")

    function alteraValor(e) {
        setValor(e.target.value)
    }
    const style = {
        display: "flex",
        flexDirection: "column"
    }
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{valor}</h1>
            
            <div style={style}>
                <input type="text" value={valor} onChange={alteraValor} />
                <input type="text" value={valor} readOnly />
                <input type="text" value={undefined} />
            </div>
        </div>
    )

}