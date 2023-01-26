import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerHeader } from './style';

export default function Header() {
  const navigate = useNavigate()
 return (
   <ContainerHeader>
    <img src='https://cdn-icons-png.flaticon.com/512/786/786197.png' onClick={()=>{navigate(-1)}}/>
    <h1> CTTS  </h1>
   </ContainerHeader>
 );
}