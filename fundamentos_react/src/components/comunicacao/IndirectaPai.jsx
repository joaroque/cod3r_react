import React, { useState } from 'react'
import IndirectaFilho from './../comunicacao/IndirectaFilho'

export default (props) =>{
    
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function forneceInformacao(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)

    }

    return(
        <div>
            <div>Pai</div>
            <span>{nome} - <strong>{idade}</strong> é {nerd ? 'nerd' : 'mundinho'}</span>
            
            <IndirectaFilho forneceInformacao={forneceInformacao}/>
        </div>
    )
}