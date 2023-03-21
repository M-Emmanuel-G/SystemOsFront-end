import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/footer';
import Header from '../../components/header/header';
import { ContainerBase, ContainerMobile } from '../../style/styleBase';
import { ContainerVerify } from './style';

export default function VerifyPage() {
    const navigate = useNavigate()
 return (
    <ContainerBase>
            <Header/>
            <ContainerVerify>
                <h2>Atenção:</h2>
                <h4>Antes de enviar a O.S, faça todas as preventivas, tais como:</h4>
                <span>conferir limpeza das lentes de cameras,</span>
                <span>conferir limpeza dos sensores de alarmes,</span>
                <span>conferir acesso remoto,</span>
                <span>conferir se estao gravando por detecção de movimento,</span>
                <span>conferir data e hora durante a reprodução,</span>
                <span>conferir o sistema de sonorização,</span>
                <span>conferir o sistema de de alarme,</span>
                <span>conferir o sistema de interfonia,</span>
                <span>limpeza do rack(Se necessário),</span>
                <span>limpeza interna do DVR...</span>

                <div>
                    <button onClick={()=>{navigate('/OsPage')}}>Avançar</button>
                    <button onClick={()=>{navigate('/HomePage')}}>Voltar</button>
                </div>
            </ContainerVerify>
            <Footer/>
    </ContainerBase>
 );
}