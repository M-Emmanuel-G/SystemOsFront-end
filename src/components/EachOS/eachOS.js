import axios from 'axios';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../BASE_URL/BASE_URL';
import { GlobalStateContext } from '../../context/GlobalStateContext';
import { EachOs } from './style';

export default function EachOS(props) {
    const context = useContext(GlobalStateContext)
    const navigate = useNavigate()

    const showOs = (os)=>{
        axios
            .get(`${BASE_URL}/os/show/${os}`)
            .then((resp)=>{context.setOs(resp.data)})
            localStorage.setItem("os",os)
            navigate('/UniqueOs')
    }

    
 
return (
   <EachOs onClick={()=>{showOs(props.os.os_Number)}}>
        <p>OS: {props.os.os_Number}</p>
        <p>Cliente: {props.os.client}</p>
    </EachOs>
)}