import React, { useEffect } from 'react';
import Header from '../../components/header/header';
import { ContainerBase, ContainerMobile } from '../../style/styleBase';
import { ContainerAdmin, ContainerList, ContainerPoint } from './style';

export default function PointRegister() {

    useEffect(()=>{},[])

 return (
   <ContainerBase>
       <ContainerMobile>
       <Header/>
        <ContainerPoint>
            <ContainerAdmin>
                <h3>controle de ponto</h3>
            </ContainerAdmin>
            <ContainerList>
                <select>
                    <option>ESCOLHA O NOME DO FUNCIONARIO</option>
                    <option>FUNCIONARIO 01</option>
                    <option>FUNCIONARIO 02</option>
                    <option>FUNCIONARIO 03</option>
                </select>
                <table border={0}>
                    <tr>
                        <th>Data</th>
                        <th>Horario</th>
                    </tr>
                    <tr>
                        <td>data xxxxxxxx</td>
                        <td>horario xxxxxxxx</td>
                    </tr>
                    
                   
                    
                </table>
            </ContainerList>
        </ContainerPoint>
       </ContainerMobile>
   </ContainerBase>
 );
}