import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "../pages/IndexPage/indexPage";
import LoginPage from "../pages/loginPage/loginPage";
import VerifyPage from "../pages/VerifyPage/verifyPage";
import ObservationPage from "../pages/ObservationPage/observationPage";
import Solicitation from "../pages/solicitation/solicitation";
import ManualProducts from "../pages/ManualProducts/manualProducts";

export default function Router() {
 return (
   <BrowserRouter>
    <Routes>
        <Route index element={<IndexPage/>}/>
        <Route path="/HomePage" element={<IndexPage/>}/>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/verificacao" element={<VerifyPage/>}/>
        <Route path="/observacoes" element={<ObservationPage/>}/>
        <Route path="/solicitacao" element={<Solicitation/>}/>
        <Route path="/manuais" element={<ManualProducts/>}/>
    </Routes>
   </BrowserRouter>
 );
}
