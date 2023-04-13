import React from 'react';
import { useState } from 'react';
import Footer from '../../components/Footer/footer';
import Header from '../../components/header/header'
import { ContainerBase } from '../../style/styleBase';
import { ContainerObs } from './style';

export default function ObservationPage() {
    const [list, setList] = useState([])

 return (
   <ContainerBase>
     <Header/>
     <ContainerObs>
        
     </ContainerObs>
     <Footer/>
   </ContainerBase>
 );
}