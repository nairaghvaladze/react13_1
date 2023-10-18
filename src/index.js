import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Layout from "./component/Layout";
import Home from "./component/Home";


class App extends React.Component{
  render()
  {
    return(
        <BrowserRouter>

        <Routes>
           
            <Route index path="/"  element={<Layout />} />
            <Route  path="/home" element={<Home />} />
            
            <Route  path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          

        </Routes>

         </BrowserRouter>
       
    )
  }
}
var root=document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);