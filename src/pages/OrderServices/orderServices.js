import React, { useState } from 'react';
import { Circle, ContainerBase, ContainerMobile } from '../../style/styleBase';
import { ContainerOrderService } from './style';
import Header from '../../components/header/header';
import Footer from '../../components/Footer/footer';
import NavBar from '../../components/NavBar/navBar';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import OrderDocument from '../../components/OrderServicePDF/orderServicePDF';
import { GenerateData } from '../../services/GenerateDate';

export default function OrderServices() {

    const [client, setClient] = useState('')
    const [address, setAddress] = useState('')
    const [contact, setContact] = useState('')
    const [resTechnician, setResTechnician] = useState('')
    const [solicitation, setSolicitation] = useState('')
    const [materials, setMaterials] = useState('')
    const [date, setDate] = useState(GenerateData())


 return (
    <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerOrderService>
                <form>
                <h2>Ordem de servico</h2>
                    <input
                        placeholder='Nome Cliente'
                        value={client}
                        onChange={(ev)=>{setClient(ev.target.value)}}
                    />
                    <input
                        placeholder='Endereco'
                        value={address}
                        onChange={(ev)=>{setAddress(ev.target.value)}}
                    />
                    <input
                        placeholder='Contato'
                        value={contact}
                        onChange={(ev)=>{setContact(ev.target.value)}}
                    />
                    <input
                        placeholder='Técnico Responsável'
                        value={resTechnician}
                        onChange={(ev)=>{setResTechnician(ev.target.value)}}
                    />
                    <textarea
                        placeholder='Oque foi solicitado?'
                        value={solicitation}
                        onChange={(ev)=>{setSolicitation(ev.target.value)}}
                        cols={38}
                        rows={10}
                    /> 
                    <textarea
                        placeholder='Materiais enviados?'
                        value={materials}
                        onChange={(ev)=>{setMaterials(ev.target.value)}}
                        cols={38}
                        rows={10}
                    >
                        
                    </textarea>
                        {/* <PDFViewer width={400} height={700}>
                        <OrderDocument
                            client={client}
                            address={address}
                            contact={contact}
                            resTechnician={resTechnician}
                            solicitation={solicitation}
                            date={date}
                        />
                    </PDFViewer> */}
                    <PDFDownloadLink document={
            <OrderDocument
                client={client}
                address={address}
                contact={contact}
                resTechnician={resTechnician}
                solicitation={solicitation}
                date={date}
                materials={materials}
            />} 
                style={{
                    width: 300,
                    height: 50,
                    backgroundColor:'#0954CD',
                    borderRadius: 12,
                    color:'#000',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textDecoration:'none',
                    fontSize: 20,
                }}
                fileName={`Ordem-Servico.pdf`}>
                {({ blob, url, loading, error }) =>
                    loading ? 'Carregando documento...' : 'Gerar PDF'
                }
            </PDFDownloadLink>
                </form>
            </ContainerOrderService>
            <Circle/>
            <NavBar/>
            <Footer/>
        </ContainerMobile>
    </ContainerBase>
 );
}