import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { BASE_URL } from '../../BASE_URL/BASE_URL';
import Header from '../../components/header/header';
import { GlobalStateContext } from '../../context/GlobalStateContext';
import useRequestData from '../../hooks/useRequestData';
import { AnimLoading, ContainerBase, ContainerMobile } from '../../style/styleBase';
import { ContainerUniqueOs } from './style';

export default function UniqueOs() {
    const [data, isLoading, error, page, setPage] = useRequestData(`${BASE_URL}/os/show`)
    const context = useContext(GlobalStateContext)
    const navigate = useNavigate()

    useEffect(()=>{
        axios
            .get(`${BASE_URL}/os/show/${localStorage.getItem('os')}`)
            .then((resp)=>{context.setOs(resp.data)})
    },[])

    const removeOs = (os)=>{
        Swal.fire({
            title: 'Deseja realmente excluir essa O.S?',
            text: "Esta acão nao poderá ser revertida!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar'
          }).then((result) => {
            if (result.isConfirmed) {
                axios
                .delete(`${BASE_URL}/os/remove/${os}`)
                .then((resp)=>{
                    console.log(resp);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${resp.data}`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                })
                .catch((error)=>{
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: `${error.data}`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                })
                setPage(!page)
                navigate('/Admin')
            }

           
          })
    }

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
            <ContainerUniqueOs>
                {isLoading&&<AnimLoading/>}
                {!isLoading&&renderOs}
            </ContainerUniqueOs>
        </ContainerMobile>
    </ContainerBase>
 );
}