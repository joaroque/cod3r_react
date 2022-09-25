import React from 'react'
import DirectaFilho from './../comunicacao/DirectaFilho'

export default (props) => (
    <div>
        <DirectaFilho nome="Joa" idade={20} nerd={true}/>
        <DirectaFilho nome="Xikito" idade={24} nerd={false}/>

    </div>
)