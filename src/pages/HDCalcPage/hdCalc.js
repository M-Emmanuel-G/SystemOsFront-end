import React, { useState } from 'react';
import { Circle, ContainerBase, ContainerMobile } from '../../style/styleBase';
import { ContainerHdCalc, ContainerInputs, ContainerResult } from './style';
import NavBar from '../../components/NavBar/navBar';
import Header from '../../components/header/header';
import Footer from '../../components/Footer/footer';

export default function HDCalcPage() {

    const [result, setResult] = useState('')
    const [storageCapacity, setStorageCapacity] = useState(0) // GB
    const [recordingHour, setRecordingHour] = useState(0)  // GB
    const [resolutionPixels, setResolutionPixels] = useState(0) // GB
    const [bitRate, setBitRate] = useState(0) // MB
    const [bitRateCompression, setBitRateCompression] = useState(0) // MB
    const [limiar, setLimiar] = useState(0) // Porcentagem Limiar

    const CalcHD = ()=>{
        const storageDays = (storageCapacity / recordingHour) * ((resolutionPixels * bitRate) / bitRateCompression) * (1 / (limiar / 100));
        return setResult(`Você terá aproximadamente ${storageDays} dias de armazenamento.`)
    }

 return (
    <ContainerBase>
        <ContainerHdCalc>
            <Header/>
            <ContainerResult>
                <span>{result} </span>
            </ContainerResult>
            <ContainerInputs>
                <div>
                    <label>Capacidade HD</label>
                    <input 
                        type="number"
                        value={storageCapacity}
                        onChange={(ev)=>{setStorageCapacity(ev.target.value)}}
                        required
                    />
                </div>
                <div>
                    <label>Taxa de Gravação</label>
                    <input 
                        type="number"
                        value={recordingHour}
                        onChange={(ev)=>{setRecordingHour(ev.target.value)}}
                        required
                    />
                </div>
                <div>
                    <label>Resolução da camera(Pixels)</label>
                    <input 
                        type="number"
                        value={resolutionPixels}
                        onChange={(ev)=>{setResolutionPixels(ev.target.value)}}
                        required
                    />
                </div>
                <div>
                    <label>Taxa de bits(BitRate)</label>
                    <input 
                        type="number"
                        value={bitRate}
                        onChange={(ev)=>{setBitRate(ev.target.value)}}
                        required
                    />
                </div>
                <div>
                    <label>Compressão</label>
                    <input 
                        type="number"
                        value={bitRateCompression}
                        onChange={(ev)=>{setBitRateCompression(ev.target.value)}}
                        required
                    />
                </div>
                <div>
                    <label>Taxa de movimento(Limiar)</label>
                    <input 
                        type="number"
                        value={limiar}
                        onChange={(ev)=>{setLimiar(ev.target.value)}}
                        required
                    />
                </div>
                <div>
                    <button onClick={CalcHD}>Calcular</button>
                </div>
            </ContainerInputs>
            <NavBar/>
            <Circle/>
            {/* <Footer/> */}
        </ContainerHdCalc>
    </ContainerBase>
 );
}