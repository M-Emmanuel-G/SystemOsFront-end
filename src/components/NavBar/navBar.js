import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerNavBar } from './style';

export default function NavBar() {
    const navigate = useNavigate()
 return (
    <ContainerNavBar>
        <img onClick={()=>{navigate('/HomePage')}} src='https://i.pinimg.com/originals/b3/cc/d5/b3ccd57b054a73af1a0d281265b54ec8.jpg'/>
        {/* <img src='https://w7.pngwing.com/pngs/502/126/png-transparent-computer-icons-request-angle-text-service.png'/>
        <img src='https://w7.pngwing.com/pngs/538/135/png-transparent-computer-icons-report-icon-angle-text-cost.png'/>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD8WsUzowDD_gvJANqRs316x-7AKy2arFt3w&usqp=CAU'/> */}
                {/* <ContainerEachServices onClick={()=>{navigate('/verificacao')}}><h3 >Enviar Os</h3></ContainerEachServices>
                <ContainerEachServices onClick={()=>{navigate('/solicitacao')}}><h3 >Solicitacao de serviço</h3></ContainerEachServices>
                <ContainerEachServices onClick={()=>{navigate('/manuais')}}><h3 >Manuais de produtos</h3></ContainerEachServices> */}
    </ContainerNavBar>
 );
}