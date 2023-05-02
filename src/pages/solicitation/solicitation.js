import React, { useState } from 'react';
import Header from '../../components/header/header';
import { AnimPulse, ContainerBase, ContainerMobile } from '../../style/styleBase';
import { ContainerSolicitation } from './style';
import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/footer';
import Swal from 'sweetalert2';
import NavBar from '../../components/NavBar/navBar';

export default function Solicitation() {

    const [solicity, setSolicity] = useState('')
    const [msgn, setMsgn] = useState('')
    const [date, setDate] = useState('')
    const [client, setClient] = useState('')
    const navigate = useNavigate('')

    const templateSolicity = {
        cliente:client,
        data:date,
        tipo: solicity,
        mensagem: msgn
    }

    const sendSolicitation = (ev)=>{
        ev.preventDefault()

        if( !solicity || !msgn || !date || !client){
            Swal.fire('Todos os campos precisam ser preenchidos.')
        }
        else{
            document.getElementById('animPulse').style.display = 'flex'
            document.getElementById('buttonSend').style.display = 'none'

            emailjs.send("service_25vayr4", "template_12p0cbn", templateSolicity, '5ZxPWFsvg_-WP62gn')
                .then((resp)=>{
                    navigate('/HomePage')
                    Swal.fire('A solicitação foi enviado com sucesso...')
                ;})
                .catch((error)=>{alert(error)})
        }
    }

 return (
    <ContainerBase>
        <ContainerMobile>
        <Header/>
        <ContainerSolicitation>
            <h2>Envie sua solicitação</h2>
            <form onSubmit={sendSolicitation}>
                <input
                    value={client}
                    onChange={(ev)=>{setClient(ev.target.value)}}
                    placeholder='Nome do cliente'
                />
                <input
                    value={date}
                    onChange={(ev)=>{setDate(ev.target.value)}}
                    type='date'
                />
                <select
                    value={solicity}
                    onChange={(ev)=>{setSolicity(ev.target.value)}}  
                >
                    <option>Selecione o tipo de solicitação...</option>
                    <option>Orcamento</option>
                    <option>Servico</option>
                </select>
                <textarea
                    placeholder='Mensagem de solicitação' 
                    value={msgn}
                    onChange={(ev)=>{setMsgn(ev.target.value)}}
                ></textarea>
                <button id='buttonSend'>Enviar</button>
            </form>
            <AnimPulse id='animPulse'/>
        </ContainerSolicitation>
        <NavBar/>
        <Footer/>
        </ContainerMobile>
    </ContainerBase>
 );
}