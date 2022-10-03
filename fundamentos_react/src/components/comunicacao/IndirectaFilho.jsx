import React from 'react'

export default (props) =>{
    
    return(
        <div>
            <div>Filho</div>

            <button onClick={
                    (_) => props.forneceInformacao('José', 20, true)
            }>
            Fornecer Informações</button>
        </div>
    )
}