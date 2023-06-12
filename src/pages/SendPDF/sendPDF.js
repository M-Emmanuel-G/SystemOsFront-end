import React from 'react';
import Header from '../../components/header/header';
import NavBar from '../../components/NavBar/navBar';
import { Circle, ContainerBase, ContainerMobile } from '../../style/styleBase';
import { ContainerPDF } from './style';
import html2pdf from "html2pdf.js";
import ImgLogo from '../../images/logoCtts.png';
import { GenerateData } from '../../services/GenerateDate';
import Footer from '../../components/Footer/footer';


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
                    <main id='content'>
                        <h2>Preventiva referente ao cliente {localStorage.getItem('client')} no dia {GenerateData()} </h2>
                        <img src={ImgLogo}/>
                        <h2>Preventiva!</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>limpeza das lentes de cameras</td>
                                </tr>
                                <tr>
                                    <td>limpeza dos sensores de alarmes</td>
                                </tr>
                                <tr>
                                    <td>acesso remoto,</td>
                                </tr>
                                <tr>
                                    <td>Inspecionar se estão gravando por detecção de movimento,</td>
                                </tr>
                                <tr>
                                    <td>data e hora durante a reprodução,</td>
                                </tr>
                                <tr>
                                    <td>conferir o sistema de sonorização,</td>
                                </tr>
                                <tr>
                                    <td>conferir o sistema de de alarme,</td>
                                </tr>
                                <tr>
                                    <td>conferir o sistema de interfonia,</td>
                                </tr>
                                <tr>
                                    <td>limpeza do rack(Se necessário),</td>
                                </tr>
                                <tr>
                                    <td>limpeza interna do DVR...</td>
                                </tr>
                            </tbody>
                        </table>
                        <h2>Dados do DVR/NVD </h2>
                        <section>
                            <div>
                                <span>Colaborador: {localStorage.getItem('colaborattor')} </span>
                            </div>
                            <div>
                                <span>Cliente: {localStorage.getItem('client')}</span>
                            </div>
                            <div>
                                <span>Data: {GenerateData()}</span>
                            </div>
                            <div>
                                <span>Modelo/Marca: {localStorage.getItem('model')}</span>
                            </div>
                            <div>
                                <span> Usuario: {localStorage.getItem('user')}</span>
                            </div>
                            <div>
                                <span>Senha: {localStorage.getItem('password')}</span>
                            </div>
                            <div>
                                <span>Qtd câmeras: {localStorage.getItem('qtdCam')}</span>
                            </div>
                            <div>
                                <span>IP: {localStorage.getItem('IP')}</span>
                            </div>
                            <div>
                                <span>Porta HTTP:  {localStorage.getItem('httpPort')}</span>
                            </div>
                            <div>
                                <span>Porta de serviço: {localStorage.getItem('servicePort')}</span>
                            </div>
                            <div>
                                <span>Armazenamento: {localStorage.getItem('storage')}</span>
                            </div>
                            <div>
                                <span>Dias de gravação: {localStorage.getItem('daysRecording')}</span>
                            </div>
                        </section>
                        <h3>Obrigado por contar com os serviços da CTTS</h3>
                        <h3>Estamos aqui para lhe oferecer qualidade e agilidade em nossos servicos.</h3>
                    </main>
            <button onClick={sendPdf}>Gerar PDF</button>
            </ContainerPDF>
            <Circle/>
            <NavBar/>
            <Footer/>
        </ContainerMobile>
    </ContainerBase>
 );
}