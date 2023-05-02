import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import { ContainerBase, ContainerMobile } from '../../style/styleBase';
import { CardHour, ContainerEachServices, ContainerHour,ContainerServices } from './style';
import Footer from '../../components/Footer/footer'
import { getCurrentTime } from '../../functions/getCurrentTime';
import NavBar from '../../components/NavBar/navBar';
import logoCtts from '../../images/logoCtts.jpg'

export default function IndexPage() {
    const navigate = useNavigate()
    const [time, setTime] = useState({})


    useEffect(()=>{ 
        
        const interval = setInterval(() => {
            const currentTime = getCurrentTime()
            setTime(currentTime)
        }, 1000);
        return () => clearInterval(interval)
    },[])
    
return (
   <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerServices>
                <img src={logoCtts}/>
            </ContainerServices>
            <NavBar/>
            <Footer/>
        </ContainerMobile>
    </ContainerBase>
 );
}