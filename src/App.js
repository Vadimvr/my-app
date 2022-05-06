import React, { } from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFind from "./pages/NotFind";
import Posts from "./pages/Posts";
import "./styles/App.css";

function App() {
    return (
        <BrowserRouter>
            <Navbar /> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="About" element={<About />} />
                <Route path="Posts" element={<Posts />} />
                <Route path="*" element={<NotFind/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
