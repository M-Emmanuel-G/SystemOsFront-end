import axios from 'axios';
import React, { useContext } from 'react';
import { GlobalStateContext } from '../../context/GlobalStateContext';
import { EachOs } from './style';

export default function EachOS(props) {
    const context = useContext(GlobalStateContext)
    const showOs = (os)=>{
        axios
            .get(`http://localhost:3003/os/show/${os}`)
            .then((resp)=>{context.setOs(resp.data)})
    }
 
return (
   <EachOs onClick={()=>{showOs(props.os.os_Number)}}>
    <p>OS: {props.os.os_Number} CLiente: {props.os.client}</p>
        
   </EachOs>
)}