import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import {ContainerBase, ContainerMobile} from '../../style/styleBase'
import { ContainerLogin } from './style';

export default function LoginPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const register = (ev)=>{
        ev.preventDefault();
        alert('Entre em contato com o administrador...')
    }

    const sendLogin = (ev)=>{
        ev.preventDefault()
        navigate('/Admin')
    }


 return (
   <ContainerBase>
    <ContainerMobile>
    <Header/>
        <ContainerLogin>
            <form onSubmit={sendLogin}>
               <h1>Login</h1>
                <input
                    value={email}
                    onChange={(ev)=>{setEmail(ev.target.value)}}
                    placeholder='Usuario'/>
                <input
                    value={password}
                    onChange={(ev)=>{setPassword(ev.target.value)}}
                    placeholder='Senha'/>
                <button disabled = {email === '' || password.length < 6}>Acessar Conta</button>
                <button type='button' onClick={register}>Registrar</button>
            </form>
        </ContainerLogin>
    </ContainerMobile>
   </ContainerBase>
 );
}