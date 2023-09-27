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

  logo:{
    width:'100%', 
    height:'10%', 
    justifyContent:'center', 
    alignItems:'center',
  },
  title:{
    width:'100%', 
    height:'5%', 
    flexDirection:'row', 
    justifyContent:'space-between',
    alignItems:'center',
    borderBottom: '1px solid #000',
  },
  materials:{
    width:'100%',
    height:'85%', 
    alignItems:'start',
  }
  
});

const MyDocument = (props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <View style={styles.logo}> <Image src={Logo} style={{width: 150,height: 150,}}/></View>
        <View style={styles.title}>
          <View style={{flex:1, flexDirection:'row', fontSize:12}}>
            <Text style={{color:`#000`}}>Cliente: </Text>
            <Text>{props.client}</Text>
          </View>
          <View style={{flex:1, flexDirection:'row', fontSize:12}}>
            <Text style={{color:`#000`}}> Data: </Text>
            <Text >{props.date}</Text>
          </View>
        </View>
        <View style={styles.materials}>
          <Text style={{fontSize:20, marginTop: 10,}}>Materiais Utilizados:</Text>
          <Text style={{marginTop: 10,}}  >{props.material}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default MyDocument;