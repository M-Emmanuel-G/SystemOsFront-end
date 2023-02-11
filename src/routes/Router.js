import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "../pages/IndexPage/indexPage";
import LoginPage from "../pages/loginPage/loginPage";
import AdminPage from "../pages/AdminPage/admin";
import PointRegister from "../pages/PointRegister/pointRegister";
import OsPage from "../pages/OsPage/OsPage";
import AnimationPage from "../pages/AnimationPage/animationPage";
import UniqueOs from "../pages/UniqueOs/UniqueOs";
import UsersPage from "../pages/UsersPage/usersPage";
import VerifyPage from "../pages/VerifyPage/verifyPage";

export default function Router() {
 return (
   <BrowserRouter>
    <Routes>
        <Route index element={<AnimationPage/>}/>
        <Route path="/HomePage" element={<IndexPage/>}/>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Admin" element={<AdminPage/>}/>
        <Route path="/RegistroDePonto" element={<PointRegister/>}/>
        <Route path="/OsPage" element={<OsPage/>}/>
        <Route path="/Colaboradores" element={<UsersPage/>}/>
        <Route path="/UniqueOs" element={<UniqueOs/>}/>
        <Route path="/verificacao" element={<VerifyPage/>}/>
    </Routes>
   </BrowserRouter>
 );
}
