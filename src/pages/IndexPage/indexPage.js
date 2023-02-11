import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import { ContainerBase, ContainerMobile } from '../../style/styleBase';
import { ContainerBanner, ContainerEachServices, ContainerIndexPage, ContainerSubHeader } from './style';
import Footer from '../../components/Footer/footer'

export default function IndexPage() {
    const navigate = useNavigate()
 return (
   <ContainerBase>
        <Header/>
            <ContainerIndexPage>
                <ContainerSubHeader>
                {/* <button onClick={(()=>{navigate('/Login')})}>Admin</button>
                <button onClick={()=>{navigate('/OsPage')}}>Enviar O.S.</button> */}
            </ContainerSubHeader>
            <ContainerBanner>
                <ContainerEachServices onClick={()=>{navigate('/verificacao')}}><h3 >Enviar Os</h3></ContainerEachServices>
                {/* <ContainerEachServices onClick={(()=>{navigate('/Login')})}><h3>Area Colaborador</h3></ContainerEachServices> */}
            </ContainerBanner>
            <Footer/>
            </ContainerIndexPage>
    </ContainerBase>
 );
}