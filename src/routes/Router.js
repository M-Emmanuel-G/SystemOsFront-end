import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "../pages/IndexPage/indexPage";
import LoginPage from "../pages/loginPage/loginPage";
import VerifyPage from "../pages/VerifyPage/verifyPage";
import ManualProducts from "../pages/ManualProducts/manualProducts";
import DVR1Page from "../pages/DVR1Page/dvrOne";
import SendPDF from "../pages/SendPDF/sendPDF";

export default function Router() {
 return (
   <BrowserRouter>
    <Routes>
        <Route index element={<IndexPage/>}/>
        <Route path="/HomePage" element={<IndexPage/>}/>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/verificacao" element={<VerifyPage/>}/>
        <Route path="/manuais" element={<ManualProducts/>}/>
        <Route path="/DVR1" element={<DVR1Page/>}/>
        <Route path="/ConteudoPDF" element={<SendPDF/>}/>
    </Routes>
   </BrowserRouter>
 );
}
