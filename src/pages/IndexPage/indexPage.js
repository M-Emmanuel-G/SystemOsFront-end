import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import { ContainerBase, ContainerMobile } from '../../style/styleBase';
import { ContainerBanner, ContainerEachServices, ContainerIndexPage, ContainerSubHeader } from './style';

export default function IndexPage() {
    const navigate = useNavigate()
 return (
   <ContainerBase>
        <ContainerMobile>
        <Header/>
            <ContainerIndexPage>
                <ContainerSubHeader>
                {/* <button onClick={(()=>{navigate('/Login')})}>Admin</button>
                <button onClick={()=>{navigate('/OsPage')}}>Enviar O.S.</button> */}
            </ContainerSubHeader>
            <ContainerBanner>
                <img src='https://yata-apix-c8896bdc-0006-4f17-a098-caf2336e8ee5.s3-object.locaweb.com.br/3172e4dff87c49dfa33a99fe50313a7a.png'/>
                <ContainerEachServices onClick={()=>{navigate('/OsPage')}}><h3 >Enviar Os</h3></ContainerEachServices>
                <ContainerEachServices onClick={(()=>{navigate('/Login')})}><h3>Area Colaborador</h3></ContainerEachServices>
            </ContainerBanner>
            </ContainerIndexPage>
        </ContainerMobile>
    </ContainerBase>
 );
}