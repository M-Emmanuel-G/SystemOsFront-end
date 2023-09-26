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
  }

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
              <Text> Horario: </Text>
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
        <Text style={{fontSize:15, marginTop:20,}}>Solicitação do cliente:</Text>
        <View style={styles.solicitation}>
          <Text style={{marginLeft:20,}}>{props.solicitation}</Text>
        </View>
        <Text style={{fontSize:15, marginTop:20,}}>Itens enviados:</Text>
        <View style={styles.materials}>
          <Text style={{marginLeft:20,}}>{props.materials}</Text>
        </View>
        <View>
          <Text style={{marginLeft:10,}}>Responsavel técnico: {props.resTechnician}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default OrderDocument;