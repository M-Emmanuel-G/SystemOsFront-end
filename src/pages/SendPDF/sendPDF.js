import React, { useEffect } from 'react';
import Header from '../../components/header/header';
import NavBar from '../../components/NavBar/navBar';
import { Circle, ContainerBase, ContainerMobile } from '../../style/styleBase';
import { ContainerCampOrder, ContainerClient, ContainerHeader, ContainerInfo, ContainerLogo, ContainerOrderService, ContainerPDF, ContainerTitle } from './style';
import html2pdf from "html2pdf.js";
import ImgLogo from '../../images/logoCtts.png';
import { GenerateData } from '../../services/GenerateDate';
import Footer from '../../components/Footer/footer';
import { myIp } from '../../services/myIP';


export default function SendPDF() {
    
    const sendPdf = ()=>{
        const content = document.getElementById('content')

        const options = {
            margin:[0, 3, 0, 0],
            filename:`Preventiva_${localStorage.getItem('client')}.pdf`,
            image:{
                type:'jpeg',
                quality:1,
            },
            html2canvas:{
                width:1000,
                heigth:10,
                scale:2,
                logging:true,
                dpi:392,
                letterRending:true,
                backgroundColor:'#2744D2',
            },
            jsPDF:{unit:'mm', format:'a4', orientation:'portrait'}
        }
    
        html2pdf().set(options).from(content).save()
    }

 return (
    <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerPDF>
                <ContainerOrderService>
                    <ContainerHeader>
                        <ContainerLogo>
                            <img src={ImgLogo}/>
                        </ContainerLogo>
                        <ContainerTitle>
                            <span>XXXXXXXXXX XXXXXXXXX XXXXXXX</span>
                            <p>Rua XXXXXXX - 000 - XXXXXXXXX - XXXXXXXXX 00000000 (00) 000000000</p>
                            <p>XXXX@XXXX.COM.BR  WWW.XXXX.COM.BR</p>
                            <p>CNPJ: 000.000.00/0000-00</p>
                        </ContainerTitle>
                    </ContainerHeader>  
                    <ContainerInfo>
                        <span>ORDEM DE SERVICO: 000000000</span>
                        <span>Hora: 00:00 Data: 00/00/0000</span>
                    </ContainerInfo>
                    <ContainerClient>
                        <span>Cliente: XXXXXXXXXX XXXXXXX XXXXXXX</span>
                        <span>Endereco: Rua XXXXXXX - 000 - XXXXXXXXX - XXXXXXXXX 00000000 (00) 000000000 </span>
                    </ContainerClient>
                    <ContainerCampOrder>
                      <div>
                        <span>Servico solicitado</span>
                      </div>
                      <div>
                        <span>Servicos Realizados</span>
                      </div>
                      <div></div>
                    </ContainerCampOrder>
                </ContainerOrderService>
            </ContainerPDF>
            <Circle/>
            <NavBar/>
            <Footer/>
        </ContainerMobile>
    </ContainerBase>
 );
}