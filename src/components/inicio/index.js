import React from 'react'

import imagem from './gaming_cloud.png'

function Inicio(){
    return (
        <div>
            <h1>
                Sobre
            </h1>
            <p>
                A Game In Cloud tem como objetivo facilitar o acesso aos games modernos sem ter a necessidade de uma super máquina de alto custo.
            </p>
            <p>
                Oferecemos nosso serviço Streaming de forma gratuita, pois ainda estamos em fase beta e aberta para receber sugestões de melhorias para os usuários.
            </p>

            <img src= {imagem} />
        </div>
    )
}

export default Inicio