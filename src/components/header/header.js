import React from 'react';
import { ContainerHeader } from './style';
import logoCtts from '../../images/logoCtts.png'

export default function Header() {
 return (
    <ContainerHeader>
      <img src={logoCtts}/>
    </ContainerHeader>
 );
}