import  emailjs  from '@emailjs/browser';
import React, { useState } from 'react';
import Footer from '../../components/Footer/footer';
import Header from '../../components/header/header';
import NavBar from '../../components/NavBar/navBar';
import { GenerateData } from '../../services/GenerateDate';
import { AnimPulse, Circle, ContainerBase, ContainerMobile } from '../../style/styleBase';
import { ContainerSendEmail, ModalContainer } from './style';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function SendEmail() {
    const navigate = useNavigate()

    const [collaborator, setCollaborator] = useState("");
    const [client, setClient] = useState("");
    const [model, setModel] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [qtdCam, setQtdCam] = useState("");
    const [ip, setIp] = useState("");
    const [httpPort, setHttpPort] = useState("");
    const [servicePort, setservicePort] = useState("");
    const [storage, setStorage] = useState("");
    const [storageTime, setStorageTime] = useState("");
    const [emailClient, setEmailClient] = useState("");
    const [obs, setObs] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        const templateMessage = {
            colaborador:collaborator,
            data : GenerateData(),
            cliente: client,
            modelo: model,
            usuario: user,
            senha: password,
            Cameras_Instaladas: qtdCam,
            ip: ip,
            Porta_Servico: servicePort,
            Porta_HTTP: httpPort,
            Armazenamento: storage,
            Dias_de_Gravacao: storageTime,
            Email_Cliente: emailClient,
            Observacao: obs
        }

        document.getElementById('modalLoading').style.display = 'flex'

        emailjs.send('service_25vayr4', 'template_qkpvdzv', templateMessage, '5ZxPWFsvg_-WP62gn')
          .then((result) => {
                Swal.fire({
                    title: 'O.S. foi enviada com sucesso...',
                    showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                    },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              navigate('/homepage')
              document.getElementById('modalLoading').style.display = 'none'
              e.target.clear()
          }, (error) => {
              toast.error('Ocorreu um erro inesperado, tente novamente mais tarde!')
          });
      };

 return (
    <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerSendEmail>
            <form onSubmit={sendEmail}>
            <div>
                <label>Colaborador:</label>
                <input
                    type="text"
                    placeholder="Nome do colaborador"
                    value={collaborator}
                    onChange={(ev) => {
                        setCollaborator(ev.target.value);
                    }}
                    />
            </div>
            <div>
                <label>Cliente:</label>
                <input
                    type="text"
                    placeholder="Nome do Cliente"
                    value={client}
                    onChange={(ev) => {
                        setClient(ev.target.value);
                    }}
                />
            </div>
            <div>
                <label>Modelo/Marca:</label>
                <input
                    placeholder="Modelo/marca"
                    value={model}
                    onChange={(ev) => {
                        setModel(ev.target.value);
                    }}
                />
            </div>

            <div>
                <label>Usuario:</label>
                <input
                    placeholder="Usuario"
                    value={user}
                    onChange={(ev) => {
                        setUser(ev.target.value);
                    }}
                />
            </div>
            <div>
                <label>Senha:</label>
                <input
                    placeholder="Senha"
                    value={password}
                    onChange={(ev) => {
                        setPassword(ev.target.value);
                    }}
                />
            </div>
            <div>
                <label>Qtd. de cameras:</label>
                <input
                    placeholder="Qtd. de cameras"
                    value={qtdCam}
                    onChange={(ev) => {
                        setQtdCam(ev.target.value);
                    }}
                />
            </div>
            <div>
                <label>IP:</label>
                <input
                    placeholder="Ip"
                    value={ip}
                    onChange={(ev) => {
                        setIp(ev.target.value);
                    }}
                />
            </div>
            <div>
                <label>Porta HTTP:</label>
                <input
                    type="number"
                    placeholder="Porta http"
                    value={httpPort}
                    onChange={(ev) => {
                        setHttpPort(ev.target.value);
                    }}
                />
            </div>
            <div>
                <label>Porta de serviço:</label>
                <input
                    type="number"
                    placeholder="Porta servico"
                    value={servicePort}
                    onChange={(ev) => {
                        setservicePort(ev.target.value);
                    }}
                />
            </div>
            <div>
                <label>Armazenamento:</label>
                <input
                    type="text"
                    placeholder="Armazenamento"
                    value={storage}
                    onChange={(ev) => {
                        setStorage(ev.target.value);
                    }}
                />
            </div>
            <div>
                <label>Dias de gravação:</label>
            <input
                type="text"
                placeholder="Dias de gravação:"
                value={storageTime}
                onChange={(ev) => {
                    setStorageTime(ev.target.value);
                }}
            />
            </div>
            <div>
                <label>Enviar para:</label>
            <input
                type="text"
                placeholder="Enviar para:"
                value={emailClient}
                onChange={(ev) => {
                    setEmailClient(ev.target.value);
                }}
            />
            </div>
                <label>Observações</label>
            <div>
            <textarea
                rows={10} 
                cols={20}
                value={obs}
                onChange={(ev)=>{setObs(ev.target.value)}}    
            />
            </div>
            <button>Enviar</button>
          </form>
            </ContainerSendEmail>
            <NavBar/>
            <Circle/>
            <Footer/>
        </ContainerMobile>
        <ModalContainer id='modalLoading'>
            <AnimPulse/>
        </ModalContainer>
        <ToastContainer/>
    </ContainerBase>
 );
}