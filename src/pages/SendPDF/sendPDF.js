import React, { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import NavBar from '../../components/NavBar/navBar';
import { Circle, ContainerBase, ContainerMobile } from '../../style/styleBase';
import { ContainerCampOrder, ContainerClient, ContainerHeader, ContainerInfo, ContainerLogo, ContainerOrderService, ContainerPDF, ContainerTitle } from './style';
import html2pdf from "html2pdf.js";
import ImgLogo from '../../images/logoCtts.png';
import { GenerateData } from '../../services/GenerateDate';
import Footer from '../../components/Footer/footer';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import MyDocument from '../../components/GeratePDF/geratePDF';


export default function SendPDF() {
    
    const [client, setClient] = useState('')
    const [material, setMaterial] = useState('')
    const [date, setDate] = useState(GenerateData())


 return (
    <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerPDF>
                <h2>Digite os materiais utilizados</h2>
                <input
                    type='text'
                    value={client}
                    onChange={(ev)=>{setClient(ev.target.value)}}
                    placeholder='Insira o nome do cliente.'
                />
                <textarea
                    rows={10}
                    cols={40}
                    value={material}
                    onChange={(ev)=>{setMaterial(ev.target.value)}}
                    placeholder='Insira os materiais utilizados.'
                />
            </ContainerPDF> 
            {/* <PDFViewer width={400} height={700}>
                <MyDocument
                    client={client}
                    material={material}
                    date={date}
                />
            </PDFViewer> */}
            <PDFDownloadLink document={
            <MyDocument
                client={client}
                material={material}
                date = {date}
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
                fileName={`${date} | ${client}.pdf`}>
                {({ blob, url, loading, error }) =>
                    loading ? 'Carregando documento...' : 'Gerar PDF'
                }
            </PDFDownloadLink>
            <Circle/>
            <NavBar/>
            <Footer/>
        </ContainerMobile>
    </ContainerBase>
 );
}