import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import { ContainerBase, ContainerMobile } from '../../style/styleBase';
import { ContainerSubHeader, ContainerUser } from './style';

export default function UsersPage() {

    const navigate = useNavigate()
 return (
    <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerSubHeader>
                    <img src='https://cdn.pixabay.com/photo/2014/04/02/10/41/button-304224_960_720.png' onClick={()=>{navigate('/OsPage')}}/>
                    <img src='https://png.pngtree.com/png-clipart/20191123/original/pngtree-list-icon-png-image_5194124.jpg' onClick={()=>{navigate('/RegistroDePonto')}}/>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScJkMre8iwdaqcTVuiTFBRLdH-nBKiDVZFxQ&usqp=CAU' onClick={()=>{navigate('/HomePage')}}/>
            </ContainerSubHeader>
            <ContainerUser>
                <h2>Em Desenvolvimento...</h2>
            </ContainerUser>
        </ContainerMobile>
    </ContainerBase>
 );
}