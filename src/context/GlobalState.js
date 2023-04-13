import { useState } from "react"
import { GlobalStateContext } from "./GlobalStateContext"

export const GlobalState = (props)=>{
    const [ os, setOs] = useState([])

    const [ manual, setManual] = useState([
        {
            product:"ANM-24 NET",
            link:"https://backend.intelbras.com/sites/default/files/2022-12/Manual_ANM_24_Net_portugues_02-22_site.pdf",
            img:"https://www.condufibra.com.br/wp-content/uploads/2020/07/WhatsApp-Image-2020-07-06-at-15.28.38.jpg"
        },
        {
            product:'XPE 3101T IP',
            link:"https://backend.intelbras.com/sites/default/files/2022-11/Manual_XPE%203101T_3001T_IP_03-22_site.pdf",
            img:"https://backend.intelbras.com/sites/default/files/styles/medium/public/2021-05/xpe-3101t-ip-front-led.png"
        },
        {
            product:'Collective 4-8-12',
            link:"https://backend.intelbras.com/sites/default/files/2023-02/Manual_Collective_01-23_site%20%282%29.pdf",
            img:"https://backend.intelbras.com/sites/default/files/2020-02/foto_principal_COLLECTIVE_4_0.jpg"
        },
        {
            product:'Comunic-16',
            link:"https://backend.intelbras.com/sites/default/files/2022-08/Manual_do_usuario_Comunic_48_01-22_site.pdf",
            img:"https://backend.intelbras.com/sites/default/files/2019-01/comunic-16_front1a_1.png"
        },

    ])



    const data = {
        os,
        setOs,
        manual,
        setManual
    }
    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}