import React, { useState } from "react";
import Footer from "../../components/Footer/footer";
import Header from "../../components/header/header";
import NavBar from "../../components/NavBar/navBar";
import { Circle, ContainerBase, ContainerMobile } from "../../style/styleBase";
import { ContainerDvrOne } from "./style";
import { useNavigate } from 'react-router-dom';

export default function DVR1Page() {

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
  const [signedBy, setSignedBy] = useState("");

  const generatePDF  =(ev)=>{
    ev.preventDefault()
    localStorage.setItem('colaborattor', collaborator )
    localStorage.setItem('client', client )
    localStorage.setItem('model', model)
    localStorage.setItem('user', user)
    localStorage.setItem('password', password)
    localStorage.setItem('qtdCam', qtdCam)
    localStorage.setItem('IP', ip)
    localStorage.setItem('httpPort', httpPort)
    localStorage.setItem('servicePort', servicePort)
    localStorage.setItem('storage', storage)
    localStorage.setItem('daysRecording', storageTime)

    navigate('/conteudoPDF')
}

  return (
    <ContainerBase>
      <ContainerMobile>
        <Header />
        <ContainerDvrOne>
          <form >
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
          </form>
          <button onClick={generatePDF}>Enviar</button>
        </ContainerDvrOne>
        <NavBar />
        <Circle/>
        <Footer />
      </ContainerMobile>
    </ContainerBase>
  );
}
