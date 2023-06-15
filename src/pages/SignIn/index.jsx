import {useAuth} from '../../hooks/auth'
import { Container, Form, BackgroundImg } from "./styles";
import {FiMail, FiLock} from 'react-icons/fi';
import { Link } from "react-router-dom";
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import { useState } from 'react';


export function SignIn(){

    const {signIn} = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    function handleSignIn (){
        signIn({email, password});
       
    }
   
    return(

        <Container>
            
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para Salvar e gerenciar seus links úteis. </p>

                <h2>
                    Faça seu login
                </h2>
                <Input
                 placeholder="E-mail"
                 type="text"
                 icon={FiMail}
                 onChange={ e => setEmail(e.target.value)}
                 >

                </Input>
                <Input
                 placeholder="Senha"
                 type="password"
                 icon={FiLock}
                 onChange={ e => setPassword(e.target.value)}
                 >

                </Input>
                <Button title="Entrar" onClick = {handleSignIn}/>


                <Link to="/register">
                    Criar Conta
                    </Link> 
            </Form>

            <BackgroundImg/>
        </Container>
    )
}