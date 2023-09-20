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
  },
});

const MyDocument = (props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Image
          src={Logo}
          style={{
            width: 300,
            height: 200,
            textAlign: 'center'
          }}
        />
        <Text
          style={
            {
              color:`#424242`,
              fontSize: 30,
              marginTop: 20,
            }
          }
        >Cliente: {props.client}</Text>
        <Text 
            style={
              {
                color:`#424242`,
                fontSize: 30,
                marginTop: 20,
              }
            }
        >Materiais utilizados: </Text>
        <Text 
          style={
            {
              color:`#000`,
              fontSize: 20,
              marginTop: 10,
            }
          }
        > {props.material} </Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;