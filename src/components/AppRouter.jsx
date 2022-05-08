import React from 'react';
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import NotFind from "../pages/NotFind";
import PostIdPage from '../pages/PostIdPage';
import Posts from "../pages/Posts";
import { routes } from "../route/index";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route =>
                <Route
                    path={route.path}
                    element={route.element}
                    exact={route.exact} />
            )}
            {/* 
            <Route path="About" element={<About />} />
            <Route exact path="Posts" element={<Posts />} />
            <Route exact path="Posts/:id" element={<PostIdPage />} />
            <Route path="*" element={<NotFind />} /> */}
        </Routes>
    );
};

export default AppRouter;