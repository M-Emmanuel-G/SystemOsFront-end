import { useState } from "react"
import { GlobalStateContext } from "./GlobalStateContext"

export const GlobalState = (props)=>{
    const [ os, setOs] = useState([])
    return(
        <GlobalStateContext.Provider value={{os, setOs}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}