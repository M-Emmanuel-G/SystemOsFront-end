import React, { useContext } from 'react';
import { useState } from 'react';
import EachProduct from '../../components/EachProduct/eachProduct';
import Footer from '../../components/Footer/footer';
import Header from '../../components/header/header';
import NavBar from '../../components/NavBar/navBar';
import { GlobalStateContext } from '../../context/GlobalStateContext';
import { Circle, ContainerBase, ContainerMobile } from '../../style/styleBase';
import { ContainerManualPage, ContainerSearch } from './style';

export default function ManualProducts() {
    const context = useContext(GlobalStateContext)
    const [search, setSearch] = useState('')

 return (
    <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerSearch>
                <span>Buscar por: </span>
                <input
                    type='text'
                    value={search}
                    onChange={(ev)=>{setSearch(ev.target.value)}}
                />
            </ContainerSearch>
            <ContainerManualPage>
                {context.manual.filter((manual)=>{
                    return manual.product.includes(search)
                }).map((manual, key)=>{
                    return(
                        <EachProduct
                            key={key}
                            product = {manual}
                        />
                    )
                })}
            </ContainerManualPage>
            <NavBar/>
            <Footer/>
            <Circle/>
        </ContainerMobile>
    </ContainerBase>
 );
}