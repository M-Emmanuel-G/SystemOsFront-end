import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerBase, ContainerMobile } from '../../style/styleBase';
import { ContainerAnimation } from './style';

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
                <img src='https://yata-apix-c8896bdc-0006-4f17-a098-caf2336e8ee5.s3-object.locaweb.com.br/3172e4dff87c49dfa33a99fe50313a7a.png'/>
            </ContainerAnimation>
        </ContainerMobile>
    </ContainerBase>
 );
}