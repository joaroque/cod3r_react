import './App.css'
import React from 'react'

import Input from './components/formulario/Input'
import IndirectaPai from './components/comunicacao/IndirectaPai'
import DirectaPai from './components/comunicacao/DirectaPai'
import ParImpar from './components/condicional/ParImpar'
import ListaAlunos from './components/repeticao/ListaAlunos'
import MembroFamilia from './components/basicos/MembroFamilia'
import Familia from './components/basicos/Familia'
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import NumeroAleatorio from './components/basicos/NumeroAleatorio'

export default () => (
    <div className='App'>

        <h1>Fundamentos React</h1>

        <div className='Cards'>
            <Card titulo="Componentes controlados" color="gray">
                <Input/>
            </Card>

            <Card titulo="Comunicação inddirecta" color="green">
                <IndirectaPai/>
            </Card>

            <Card titulo="Comunicação directa" color="green">
                <DirectaPai/>
            </Card>

            <Card titulo="Condicional" color="yellow">
                <ParImpar numero={2} />
            </Card>

            <Card titulo="Repeticção" color="grenn">
                <ListaAlunos/>
            </Card>
            
            <Card titulo="Familia" color="pink">
                <Familia sobrenome="Roque">
                    <MembroFamilia nome="Joa" />
                    <MembroFamilia nome="Quim" />
                    <MembroFamilia nome="Catumua" />
                </Familia>
            </Card>

            <Card titulo="Numero aleatório" color="red">
                <NumeroAleatorio
                    min={1}
                    max={5} />
            </Card>

            <Card titulo="Fragmento">
                <Fragmento />
            </Card>

            <Card titulo="Com parametro">
                <ComParametro
                    titulo="Com parametro"
                    subtitulo="obrigado igualmente" />
            </Card>

            <Card titulo="Primeiro Componente">
                <Primeiro />
            </Card>
        </div>

    </div>
);