import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import { ContainerBase, ContainerMobile } from '../../style/styleBase';
import { ContainerServices, ContainerTittle, Services } from './style';
import Footer from '../../components/Footer/footer'
import NavBar from '../../components/NavBar/navBar';
import { GenerateData } from '../../services/GenerateDate';


export default function IndexPage() {
    const navigate = useNavigate()

    
    const data = ()=>{
        const date = new Date()
        const today = date.getDate()
        const month = date.getMonth() + 1 
        const year = date.getFullYear()
        const hour = date.getHours()
        const minutes = date.getMinutes()

        return `${today}/${month}/${year} as ${hour}:${minutes}`

    }

    console.log(data());
   

return (
   <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerTittle>
                <h1>Serviços</h1>
            </ContainerTittle>
            <ContainerServices>
                <Services onClick={()=>{navigate('/dvr1')}}>Preventiva</Services>
                <Services onClick={()=>{navigate('/manuais')}}>Manuais</Services>
            </ContainerServices>
            <NavBar/>
            <Footer/>
        </ContainerMobile>
    </ContainerBase>
 );
}