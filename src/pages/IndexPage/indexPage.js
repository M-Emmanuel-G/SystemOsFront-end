import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import { ContainerBase } from '../../style/styleBase';
import { ContainerBanner, ContainerEachServices, ContainerHour, ContainerIndexPage } from './style';
import Footer from '../../components/Footer/footer'
import Slider from '../../components/Slider/slider';
import {motion} from 'framer-motion'

export default function IndexPage() {
    const navigate = useNavigate()
    const [slider, setSlider] = useState(Slider())
    const carousel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(()=>{
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[])

return (
   <ContainerBase>
        <Header/>
            <ContainerIndexPage>
            <ContainerBanner>
                <ContainerHour>
                    <motion.div ref={carousel} className='carousel' whileTap={{cursor:'grabbing'}}>
                        <motion.div className='inner' drag = 'x' dragConstraints={{right:0, left: - width}}>
                            {slider.map((image, key)=>{
                                return(
                                    <motion.div className='item' key={key} animate={{ x: [100, 0] }} transition = {{ duration : 1, delay : 2 }}>
                                            <img src={image.img}/>
                                    </motion.div>    
                                )
                            })}
                        </motion.div>
                    </motion.div>
                </ContainerHour>
                <ContainerEachServices onClick={()=>{navigate('/verificacao')}}><h3 >Enviar Os</h3></ContainerEachServices>
                {/* <ContainerEachServices onClick={(()=>{navigate('/Login')})}><h3>Area Colaborador</h3></ContainerEachServices> */}
            </ContainerBanner>
            </ContainerIndexPage>
            <Footer/>
    </ContainerBase>
 );
}