import React from "react";
import alunos from "../../data/alunos"

export default () => {

    const alunosLi = alunos.map((aluno, index) => {
        return (
            <li key={index}>{aluno.id}) - {aluno.nome} - {aluno.nota}</li>
        )
    })

    return (
        <div>
            <ol style={{ listStyle: 'none' }}>
                {alunosLi}
            </ol>
        </div>
    )
}