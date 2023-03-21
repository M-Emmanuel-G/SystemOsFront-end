import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import { AnimPulse, ContainerBase } from '../../style/styleBase';
import { CardHour, ContainerEachServices, ContainerHour, ContainerIndexPage, ContainerServices } from './style';
import Footer from '../../components/Footer/footer'
import { getCurrentTime } from '../../functions/getCurrentTime';

export default function IndexPage() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [time, setTime] = useState({})


    useEffect(()=>{
        
        const interval = setInterval(() => {
            const currentTime = getCurrentTime()
            setTime(currentTime)
        }, 1000);
        return () => clearInterval(interval)
    },[])

    const renderHour = ()=>{
        return(
            <>
                <CardHour><span>{time.hours}</span></CardHour>
                <CardHour><span>{time.minutes}</span></CardHour>
                <CardHour><span>{time.seconds}</span></CardHour>
            </>
        )
    }
return (
   <ContainerBase>
        <Header/>
            <ContainerIndexPage>
            <ContainerServices>
                <ContainerHour>
                    {renderHour()}
                </ContainerHour>
                <ContainerEachServices onClick={()=>{navigate('/verificacao')}}><h3 >Enviar Os</h3></ContainerEachServices>
                <ContainerEachServices onClick={()=>{navigate('/solicitacao')}}><h3 >Solicitacao de serviço</h3></ContainerEachServices>
            </ContainerServices>
            </ContainerIndexPage>
            <Footer/>
    </ContainerBase>
 );
}