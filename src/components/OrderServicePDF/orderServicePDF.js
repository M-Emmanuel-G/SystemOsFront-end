import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import Logo from '../../images/logoCtts.png'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    fontSize:12
  },
  header: {
    width:'100%',
    height:'10%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  camp:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10,
    marginBottom:10,
  },  
  clientInfo:{
    border: '1px solid #000',
  },
  solicitation:{
  },
  materials:{
  },
  marginText:{
    marginTop:10,
  },
  titleText:{
    fontSize:15,
    marginTop:20,
  },

});

const OrderDocument = (props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <View style={styles.header}>
          <Image style={{width:300,height:300}} source={Logo}/>
        </View>
        <View style={styles.clientInfo}>
          <View style={styles.camp}>
            <View style={{ flexDirection:'row'}}>
              <Text style={{fontWeight:'bold'}}>Cliente: </Text>
              <Text> {props.client}</Text>
            </View>
            <View style={{ flexDirection:'row'}}>
              <Text> Data: </Text>
              <Text> {props.date} </Text>
            </View>
          </View>
          <View style={styles.camp}>
            <View style={{ flexDirection:'row'}}>
              <Text style={{fontWeight:'bold'}}>Endereço: </Text>
              <Text> {props.address} </Text>
            </View>
            <View style={{ flexDirection:'row'}}>
              <Text> Contato: </Text>
              <Text> {props.contact} </Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.marginText}>Observações:</Text>
          <Text style={styles.marginText}>Os equipamentos fornecidos possuem garantias declarada pelo fabricante</Text>
          <Text style={styles.marginText}>A CTTS oferece garantia total(mão de obra e equipamentos) no total de 120 dias</Text>
          <Text style={styles.marginText}>Após este prazo será cobrada uma taxa de visita técnica a ser definida no ato da solicitação da mesma</Text>
          <Text style={styles.marginText}>A garantia não será valida nos casos de descargas atmosféricas, agentes da natureza ou mau uso</Text>
          <Text style={styles.marginText}>A CTTS segurança eletronica, a mais de 10 anos no mercado atuando nos seguimentos de CFTV</Text>
          <Text style={styles.marginText}>Alarmes eletronicos, interfonia digital, comunicação condominial, sonorização de ambientes</Text>
          <Text style={styles.marginText}>Automatização de portões e cancelas, cabeamento estruturado, cabeamento óptico(fibra óptica)</Text>
          <Text style={{marginTop:30}}>Nossa missào e fornecer os melhores produtos, serviços e soluções para nossos clientes</Text>
        </View>
        <Text style={styles.titleText}>Solicitação do cliente:</Text>
        <View style={styles.solicitation}>
          <Text style={{marginLeft:20,}}>{props.solicitation}</Text>
        </View>
        <Text style={styles.titleText}>Itens enviados:</Text>
        <View style={styles.materials}>
          <Text style={{marginLeft:20,}}>{props.materials}</Text>
        </View>
        <View>
          <Text style={styles.titleText}>Defeitos constatados:</Text>
          <Text>{props.defectsFounds}</Text>
        </View>
        <View>
          <Text style={styles.titleText}>Observações:</Text>
          <Text>{props.obs}</Text>
        </View>
        <View>
          <Text style={styles.titleText}>Responsável técnico: {props.resTechnician}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default OrderDocument;