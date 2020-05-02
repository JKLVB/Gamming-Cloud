import React, { useState } from 'react'
import './App.css';

import { Breadcrumb } from 'react-bootstrap';

import Cadastro from './components/cadastro';
import Inicio from './components/inicio';
import Google from './components/google_stadia';
import Suporte from './components/suporte';


function App() {
  const [conteudoPrin, setConteudoPrin] = useState(Inicio)

  return (
    <div className="App">
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => setConteudoPrin( <Inicio /> )}>Início</Breadcrumb.Item>
        <Breadcrumb.Item onClick={() => setConteudoPrin( <Cadastro /> )}>Cadastro</Breadcrumb.Item>
        <Breadcrumb.Item onClick={() => setConteudoPrin( <Google/> )}>Conheça a Google Stadia</Breadcrumb.Item>
        <Breadcrumb.Item onClick={() => setConteudoPrin( <Suporte/> )}>Suporte</Breadcrumb.Item>
      </Breadcrumb>

      <div className='conteudo-principal'>
        { conteudoPrin }
      </div>
      
    </div>
  );
}

export default App;
