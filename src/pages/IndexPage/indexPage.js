import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import { ContainerBase, ContainerMobile } from '../../style/styleBase';
import { ContainerServices, ContainerTittle, Services } from './style';
import Footer from '../../components/Footer/footer'
import NavBar from '../../components/NavBar/navBar';


export default function IndexPage() {
    const navigate = useNavigate()

return (
   <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerTittle>
            </ContainerTittle>
            <ContainerServices>
                <Services onClick={()=>{navigate('/dvr1')}}>Preventiva PDF</Services>
                <Services onClick={()=>{navigate('/preventiva')}}>Preventiva Email</Services>
                <Services onClick={()=>{navigate('/manuais')}}>Manuais</Services>
            </ContainerServices>
            <NavBar/>
            <Footer/>
        </ContainerMobile>
    </ContainerBase>
 );
}