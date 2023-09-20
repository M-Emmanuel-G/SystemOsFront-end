import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import { Circle, ContainerBase, ContainerMobile } from '../../style/styleBase';
import { ContainerServices, ContainerTittle, Services } from './style';
import Footer from '../../components/Footer/footer';
import NavBar from '../../components/NavBar/navBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function IndexPage() {
    const navigate = useNavigate()

return (
   <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerTittle>
            </ContainerTittle>
            <ContainerServices>
                <Services onClick={()=>{navigate('/ConteudoPDF')}}>Ordem de Servico</Services>
                <Services onClick={()=>{navigate('/preventiva')}}>Preventiva Email</Services>
                <Services onClick={()=>{navigate('/manuais')}}>Manuais</Services>
                <Services onClick={()=>{navigate('/CalculoHD')}}>Cálculo HD</Services>
            </ContainerServices>
            <Circle/>
            <NavBar/>
            <Footer/>
        </ContainerMobile>
        <ToastContainer/>
    </ContainerBase>
 );
}