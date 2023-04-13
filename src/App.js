import React from "react";
import Router from "./routes/Router";
import { GlobalState } from "./context/GlobalState";
import LoginPage from "./pages/loginPage/loginPage";



function App() {
  return (
   <GlobalState>
     <Router/>
   </GlobalState>
  )
}

export default App;
