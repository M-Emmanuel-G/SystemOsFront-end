import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerNavBar } from './style';
import ImgHome from '../../images/home.png'

export default function NavBar() {
    const navigate = useNavigate()
 return (
    <ContainerNavBar>
         <img onClick={()=>{navigate('/HomePage')}} src={ImgHome}/>
    </ContainerNavBar>
 );
}