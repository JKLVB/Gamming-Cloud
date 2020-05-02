import React, {useState} from 'react'

import { Form, Button } from 'react-bootstrap'

function Suporte(){

    const[email, setEmail] = useState(''),
    [descricao, setDescricao] = useState('')

    function exibirAlerta(){
        if(email.trim() === "" || descricao.trim() === ""){
            alert("Existem campos nao preenchidos!")
        }else{
            const texto = `Enviado com sucesso!`
            
            alert(texto)
        }  
    }

    return(
        <div>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descrição do Assunto</Form.Label>
                <Form.Control as="textarea" rows="3" onChange={(e) => setDescricao(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={() => exibirAlerta()}>
                Enviar
            </Button>

        </div>

    )
}

export default Suporte;