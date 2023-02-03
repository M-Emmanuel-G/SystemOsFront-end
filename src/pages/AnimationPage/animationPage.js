import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerBase, ContainerMobile } from '../../style/styleBase';
import { ContainerAnimation } from './style';
import imgLogo from '../images/logoCtts.jpg'

export default function AnimationPage() {
    const navigate = useNavigate()
    useEffect(()=>{
        setTimeout(() => {
            navigate("/HomePage")
        }, 7000);
    },[])
 return (
    <ContainerBase>
        <ContainerMobile>
            <ContainerAnimation>
                <img src={imgLogo}/>
            </ContainerAnimation>
        </ContainerMobile>
    </ContainerBase>
 );
}