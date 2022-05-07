import React from 'react';
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import NotFind from "../pages/NotFind";
import PostIdPage from '../pages/PostIdPage';
import Posts from "../pages/Posts";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="About" element={<About />} />
            <Route exact path="Posts" element={<Posts />} />
            <Route exact path="Posts/:id" element={<PostIdPage />} />
            <Route path="*" element={<NotFind />} />
        </Routes>
    );
};

export default AppRouter;