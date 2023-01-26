import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import { ContainerBase, ContainerMobile } from '../../style/styleBase';
import { ContainerBanner, ContainerIndexPage, ContainerSubHeader } from './style';

export default function IndexPage() {
    const navigate = useNavigate()
 return (
   <ContainerBase>
        <ContainerMobile>
        <Header/>
            <ContainerIndexPage>
                <ContainerSubHeader>
                <button onClick={(()=>{navigate('/Login')})}>Admin</button>
                <button onClick={()=>{navigate('/OsPage')}}>Enviar O.S.</button>
            </ContainerSubHeader>
            <ContainerBanner>
                <h1>C-T-T-S</h1>
                <img src='https://sindiconet-files.s3.amazonaws.com/GoogleWebStories/limites-das-cameras-cftv/assets/5.gif'/>
                <h2>Central Tecnica</h2>
            </ContainerBanner>
            </ContainerIndexPage>
        </ContainerMobile>
    </ContainerBase>
 );
}