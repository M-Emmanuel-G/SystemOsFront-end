import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "../pages/IndexPage/indexPage";
import LoginPage from "../pages/loginPage/loginPage";
import AdminPage from "../pages/AdminPage/admin";
import PointRegister from "../pages/PointRegister/pointRegister";
import OsPage from "../pages/OsPage/OsPage";

export default function Router() {
 return (
   <BrowserRouter>
    <Routes>
        <Route index element={<IndexPage/>}/>
        <Route path="/HomePage" element={<IndexPage/>}/>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Admin" element={<AdminPage/>}/>
        <Route path="/RegistroDePonto" element={<PointRegister/>}/>
        <Route path="/OsPage" element={<OsPage/>}/>
        <Route path="/Colaboradores" element={<OsPage/>}/>
    </Routes>
   </BrowserRouter>
 );
}
