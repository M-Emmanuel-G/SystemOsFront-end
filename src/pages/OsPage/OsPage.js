import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerBase, ContainerMobile } from '../../style/styleBase';
import { ContainerHomePage } from './style';
import Header from '../../components/header/header'

export default function OsPage() {
    const navigate = useNavigate()

    const [client, setClient] = useState('')
    const [model, setModel] = useState('')
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [ip, setIp] = useState('')
    const [httpPort, setHttpPort] = useState('')
    const [servicePort, setservicePort] = useState('')
    const [storage, setStorage] = useState('')
    const [storageTime, setStorageTime] = useState('')

    const body = {
        client: client,
        model: model,
        user: user,
        password: password,
        ip: ip,
        http_Port: httpPort,
        service_Port: servicePort,
        storage: storage,
        recording_Days: storageTime
    }

    const sendForm = (ev)=>{
        ev.preventDefault()
        axios
            .post(`http://localhost:3003/os/create`, body)
            .then((response)=>{alert(response.data)})
            .catch((error)=>{alert(error.response.data)})
    }

 return (
    <ContainerBase>
       <ContainerMobile>
       <Header/>
        <ContainerHomePage>
            <h2>Envio OS</h2>
            <form onSubmit={sendForm}>
               <div>
               <input
                    placeholder='cliente'
                    value={client}
                    onChange={(ev)=>{setClient(ev.target.value)}}
                    
                />
                <input
                    placeholder='modelo/marca'
                    value={model}
                    onChange={(ev)=>{setModel(ev.target.value)}}
                    
                />
                <input
                    placeholder='usuario'
                    value={user}
                    onChange={(ev)=>{setUser(ev.target.value)}}
                    
                />
                <input
                    placeholder='senha'
                    value={password}
                    onChange={(ev)=>{setPassword(ev.target.value)}}
                    
                />
                <input
                    placeholder='ip'
                    value={ip}
                    onChange={(ev)=>{setIp(ev.target.value)}}
                    
                />
                <input
                    placeholder='porta http'
                    value={httpPort}
                    onChange={(ev)=>{setHttpPort(ev.target.value)}}
                    
                />
                <input
                    placeholder='porta servico'
                    value={servicePort}
                    onChange={(ev)=>{setservicePort(ev.target.value)}}
                    
                />
                <input
                    placeholder='armazenamento'
                    value={storage}
                    onChange={(ev)=>{setStorage(ev.target.value)}}
                    
                />
                <input
                    placeholder='tempo de gravacao'
                    value={storageTime}
                    onChange={(ev)=>{setStorageTime(ev.target.value)}}

                />
               </div>
                <section>
                    <button>Enviar registro</button>
                </section>
            </form>
        </ContainerHomePage>
       </ContainerMobile>
    </ContainerBase>
 );
}