import React from 'react';
import { ContainerEachProduct } from './style';

export default function EachProduct(props) {
 return (
   <ContainerEachProduct>
        <img src={props.product.img}/>
        <span>{props.product.product}</span>
        <a href={props.product.link}>Manual</a>
   </ContainerEachProduct>
 );
}