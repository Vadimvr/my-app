import React from 'react';
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import NotFind from "../pages/NotFind";
import Posts from "../pages/Posts";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="About" element={<About />} />
            <Route path="Posts" element={<Posts />} />
            <Route path="*" element={<NotFind />} />
        </Routes>
    );
};

export default AppRouter;