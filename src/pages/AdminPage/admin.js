import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EachOS from '../../components/EachOS/eachOS';
import Header from '../../components/header/header';
import { GlobalStateContext } from '../../context/GlobalStateContext';
import useRequestData from '../../hooks/useRequestData';
import { ContainerBase, ContainerMobile } from '../../style/styleBase';
import { ContainerAdmin, ContainerMenuAdmin, ContainerOsAdmin, ListOs, UniqueOs } from './style';

export default function AdminPage() {
    const context = useContext(GlobalStateContext)
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    const [data, isLoading, error, page, setPage] = useRequestData(`http://localhost:3003/os/show`)

    const removeOs = (os)=>{
        axios
        .delete(`http://localhost:3003/os/remove/${os}`)
        .then((resp)=>{alert(resp.data)})
        .catch((error)=>{alert(error.data)})
        setPage(!page)
    }


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

    const renderOs = context.os.map((os, key)=>{
        return(
            <table key={key}>
                <tbody>
                    <tr>
                        <th>OS:</th>
                        <td>{os.os_Number}</td>
                    </tr>
                    <tr>
                        <th>Cliente</th>
                        <td>{os.client}</td>
                    </tr>
                    <tr>
                        <th>Modelo</th>
                        <td>{os.model}</td>
                    </tr>
                    <tr>
                        <th>usuario</th>
                        <td>{os.user}</td>
                    </tr>
                    <tr>
                        <th>senha</th>
                        <td>{os.password}</td>
                    </tr>
                    <tr>
                        <th>ip</th>
                        <td>{os.ip}</td>
                    </tr>
                    <tr>
                        <th>porta servico</th>
                        <td>{os.service_Port}</td>
                    </tr>
                    <tr>
                        <th>porta http</th>
                        <td>{os.http_Port}</td>
                    </tr>
                    <tr>
                        <th>armazenamento</th>
                        <td>{os.storage}</td>
                    </tr>
                    <tr>
                        <th>dias gravacao</th>
                        <td>{os.recording_Days}</td>
                    </tr>
                    <tr>
                        <td>Editar</td>
                        <td>
                            <button onClick={()=>{removeOs(os.os_Number)}}>Excluir</button>
                        </td>
                    </tr>
                </tbody>

            </table>
        )
    })
    
return (
    <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerAdmin>
                <ContainerMenuAdmin>
                    <img src='https://cdn.pixabay.com/photo/2014/04/02/10/41/button-304224_960_720.png' onClick={()=>{navigate('/OsPage')}}/>
                    <img src='https://img2.gratispng.com/20180810/aff/kisspng-computer-icons-clip-art-image-employee-portable-ne-from-agricultural-testing-to-product-regulatory-co-5b6d9b9c5f41c7.2194976015339099163902.jpg' onClick={()=>{navigate('/')}} />
                    <img src='https://png.pngtree.com/png-clipart/20191123/original/pngtree-list-icon-png-image_5194124.jpg' onClick={()=>{navigate('/RegistroDePonto')}}/>
                    <div>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScJkMre8iwdaqcTVuiTFBRLdH-nBKiDVZFxQ&usqp=CAU' onClick={()=>{navigate('/HomePage')}}/>
                    </div>
                </ContainerMenuAdmin>
                <ContainerOsAdmin>
                    <ListOs>
                        <div>
                            <input
                                placeholder='Digite o numero da OS'
                                value={search}
                                onChange={(ev)=>{setSearch(ev.target.value)}}
                            />
                        </div>
                        <section>
                        {render}
                        </section>

                        {/* <section>
                            {isLoading&&'Carregando'}
                            {!isLoading&&render}
                        </section> */}
                    </ListOs>
                    <UniqueOs>
                        {isLoading&&'Carregando'}
                        {!isLoading&&renderOs}
                     
                    </UniqueOs>
                    
                </ContainerOsAdmin>
            </ContainerAdmin>
        </ContainerMobile>
    </ContainerBase>
 );
}