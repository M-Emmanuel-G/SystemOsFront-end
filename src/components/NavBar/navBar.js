import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerNavBar } from './style';

export default function NavBar() {
    const navigate = useNavigate()
 return (
    <ContainerNavBar>
         <img onClick={()=>{navigate('/HomePage')}} src='https://i.pinimg.com/originals/b3/cc/d5/b3ccd57b054a73af1a0d281265b54ec8.jpg'/>
         <img onClick={()=>{navigate('/Solicitacao')}} src = 'https://e7.pngegg.com/pngimages/755/711/png-clipart-computer-icons-purchase-order-icon-design-supermarket-bag-text-share-icon.png'/>
         <img onClick={()=>{navigate('/Verificacao')}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSToon7nC6XF02MtJ-KYyeZqFfp72EsRJiMrRY1ElNsvVJAipMISvy4Ek3o5D-0ts7-6KA&usqp=CAU'/>
         <img onClick={()=>{navigate('/manuais')}} src='https://img1.gratispng.com/20180512/yxe/kisspng-computer-icons-product-manuals-owner-s-manual-5af6876b5ff705.2413174315261059633931.jpg'/>
    </ContainerNavBar>
 );
}