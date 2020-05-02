import React from 'react'

import './style.css'

function Google(){

    return(
        <div className='janela-google'>
            <h4>
                Demonstração do serviço de Streaming da Google:
            </h4>

            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/zPITKqTguxI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            

        </div>
    )
}

export default Google;