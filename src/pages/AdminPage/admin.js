import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../BASE_URL/BASE_URL';
import EachOS from '../../components/EachOS/eachOS';
import Header from '../../components/header/header';
import { GlobalStateContext } from '../../context/GlobalStateContext';
import useRequestData from '../../hooks/useRequestData';
import { AnimLoading, ContainerBase, ContainerMobile } from '../../style/styleBase';
import { ContainerAdmin, ContainerMenuAdmin, ContainerOsAdmin, ListOs, UniqueOs } from './style';

export default function AdminPage() {
    const context = useContext(GlobalStateContext)
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    const [data, isLoading] = useRequestData(`${BASE_URL}/os/show`)

    const render = data
        .filter((order)=>{
            return order.client.includes(search)
        })
        .map((os, key)=>{
        return (
            <EachOS
                os={os}
                key={key}
            />
        )
    })

  
    
return (
    <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerAdmin>
                <ContainerMenuAdmin>
                    <img src='https://cdn.pixabay.com/photo/2014/04/02/10/41/button-304224_960_720.png' onClick={()=>{navigate('/OsPage')}}/>
                    <img src='https://img2.gratispng.com/20180810/aff/kisspng-computer-icons-clip-art-image-employee-portable-ne-from-agricultural-testing-to-product-regulatory-co-5b6d9b9c5f41c7.2194976015339099163902.jpg' onClick={()=>{navigate('/Colaboradores')}} />
                    <img src='https://png.pngtree.com/png-clipart/20191123/original/pngtree-list-icon-png-image_5194124.jpg' onClick={()=>{navigate('/RegistroDePonto')}}/>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScJkMre8iwdaqcTVuiTFBRLdH-nBKiDVZFxQ&usqp=CAU' onClick={()=>{navigate('/HomePage')}}/>
                </ContainerMenuAdmin>
                <ContainerOsAdmin>
                    <ListOs>
                        <div>
                            <input
                                placeholder='Cliente'
                                value={search}
                                onChange={(ev)=>{setSearch(ev.target.value)}}
                            />
                        </div>
                        <section>
                            {isLoading&&<AnimLoading/>}
                            {!isLoading&&render}
                        </section>
                    </ListOs>
                </ContainerOsAdmin>
            </ContainerAdmin>
        </ContainerMobile>
    </ContainerBase>
 );
}