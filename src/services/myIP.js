import axios from "axios";

export const myIp = ()=>{
    axios
        .get("http://api.ipify.org/")
        .then((res)=>{return res})
        .catch((err)=>{console.log(err)})
}