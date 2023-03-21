import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerBase } from '../../style/styleBase';
import { ContainerHomePage } from './style';
import Header from '../../components/header/header'
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser'
import Footer from '../../components/Footer/footer'

export default function OsPage() {
    const navigate = useNavigate()

    const [collaborator, setCollaborator] = useState('')
    const [date, setDate] = useState('')
    const [client, setClient] = useState('')
    const [model, setModel] = useState('')
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [qtdCam, setQtdCam] = useState('')
    const [ip, setIp] = useState('')
    const [httpPort, setHttpPort] = useState('')
    const [servicePort, setservicePort] = useState('')
    const [storage, setStorage] = useState('')
    const [storageTime, setStorageTime] = useState('')
    const [obs, setObs] = useState('')
    const [signedBy, setSignedBy] = useState('')
    const [email, setEmail] = useState('')
 
    const sendForm = (ev)=>{
        ev.preventDefault()

        if( !collaborator|| !date|| !client|| !model|| !user|| !password|| !ip|| !httpPort|| !servicePort|| !storage|| !storageTime|| !signedBy){
            Swal.fire({
                title:'Ops....',
                text:'Todas a informações precisam ser enviadas..'
            })
        } else{
            const templateOS = {
                colaborador : collaborator,
                data: date,
                cliente: client,
                modelo: model,
                usuario: user,
                senha: password,
                Cameras_Instaladas: qtdCam,
                ip: ip,
                Porta_HTTP: httpPort,
                Porta_Servico: servicePort,
                Armazenamento: storage,
                Dias_de_gravacao: storageTime,
                Observacao: obs,
                Autorizado_por: signedBy,
                Email_Cliente: email
            }
    
            emailjs.send("service_25vayr4", "template_qkpvdzv", templateOS, '5ZxPWFsvg_-WP62gn')
            .then((resp)=>{
                navigate('/HomePage')
                Swal.fire('O.S. foi enviado com sucesso...')
                ;})
            .catch((error)=>{alert(error)})
        }

       
    }

 return (
    <ContainerBase>
       <Header/>
        <ContainerHomePage>
            
            <h2>Envio OS</h2>
            <form onSubmit={sendForm}>
                <div>
                <input
                    type='text'
                    placeholder='Nome do Colaborador'
                    value={collaborator}
                    onChange={(ev)=>{setCollaborator(ev.target.value)}}
                />
                <input
                    type='date'
                    placeholder='Data'
                    value={date}
                    onChange={(ev)=>{setDate(ev.target.value)}}
                />
                
               <input
                    placeholder='Cliente'
                    value={client}
                    onChange={(ev)=>{setClient(ev.target.value)}}
                />
                <input
                    placeholder='Modelo/marca'
                    value={model}
                    onChange={(ev)=>{setModel(ev.target.value)}}
                    
                />
                <input
                    placeholder='Usuario'
                    value={user}
                    onChange={(ev)=>{setUser(ev.target.value)}}
                    
                />
                <input
                    placeholder='Senha'
                    value={password}
                    onChange={(ev)=>{setPassword(ev.target.value)}}
                    
                />
                <input
                    placeholder='Qtd. de cameras'
                    value={qtdCam}
                    onChange={(ev)=>{setQtdCam(ev.target.value)}}
                    
                />
                <input
                    placeholder='Ip'
                    value={ip}
                    onChange={(ev)=>{setIp(ev.target.value)}}
                    
                />
                <input
                    type='number'
                    placeholder='Porta http'
                    value={httpPort}
                    onChange={(ev)=>{setHttpPort(ev.target.value)}}
                    
                />
                <input
                    type='number'
                    placeholder='Porta servico'
                    value={servicePort}
                    onChange={(ev)=>{setservicePort(ev.target.value)}}
                    
                />
                <input
                    type='text'
                    placeholder='Armazenamento'
                    value={storage}
                    onChange={(ev)=>{setStorage(ev.target.value)}}
                    
                />
                <input
                    type='text'
                    placeholder='Dias de gravação:'
                    value={storageTime}
                    onChange={(ev)=>{setStorageTime(ev.target.value)}}
                />
                <input
                    placeholder='Observações:'
                    value={obs}
                    onChange={(ev)=>{setObs(ev.target.value)}}
                />
                <input
                    placeholder='Assinado por:'
                    value={signedBy}
                    onChange={(ev)=>{setSignedBy(ev.target.value)}}
                />
                <input
                    type='email'
                    placeholder='Enviar para:'
                    value={email}
                    onChange={(ev)=>{setEmail(ev.target.value)}}
                />
               
               </div>
                <section>
                    <button>Enviar registro</button>
                    <button type='button' onClick={()=>{navigate('/verificacao')}}>Voltar</button>
                </section>
            </form>
        </ContainerHomePage>
        <Footer/>
    </ContainerBase>
 );
}