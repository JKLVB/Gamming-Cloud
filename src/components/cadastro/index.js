import React, { useState } from 'react'

import { Form, Button } from 'react-bootstrap'

function Cadastro(){
    const [nome, setNome] = useState(""),
    [cpf, setCpf] = useState(""),
    [data, setData] = useState(""),
    [senha, setSenha] = useState(""),
    [exibir, setExibir] = useState(false)

    function exibirAlerta(){
        if(nome.trim() === ""
        || cpf.trim() === ""
        || data.trim() === ""
        || senha.trim() === ""){
            alert("Existem campos nao preenchidos!")
        }else{
            const texto = `Nome: ${nome}
            CPF: ${cpf}
            Data de Nascimento: ${data}
            Senha: ${senha}`
            
            alert(texto)
        }
    }
    return(
        <div>
            <div className='cadastro'>
                <Form.Group>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Escreva seu nome" onChange={(e) => setNome(e.target.value)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>CPF</Form.Label>
                    <Form.Control type="number" placeholder="Escreva seu CPF" onChange={(e) => setCpf(e.target.value)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Data</Form.Label>
                    <Form.Control type="date" onChange={(e) => setData(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={exibir === false? "password":"text"} onChange={(e) => setSenha(e.target.value)} placeholder="Password" />
                </Form.Group>
                <Form.Group>
                    <Form.Check type="checkbox" label="Mostrar Senha" onClick={() => setExibir(!exibir)}/>
                </Form.Group>
                <Button variant="primary" onClick={() => exibirAlerta()}>
                    Concluir
                </Button>
            </div>
        </div>
    )
}

export default Cadastro;