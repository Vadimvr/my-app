import React from 'react';
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import NotFind from "../pages/NotFind";
import PostIdPage from '../pages/PostIdPage';
import Posts from "../pages/Posts";


export const  routes = [
    {path:'About', element: <About/>,exact:true},
    {path:'Posts', element: <Posts/>,exact:true},
    {path:'Posts/:id', element: <PostIdPage/>,exact:true},
    {path:'/', element: <Home/>,exact:true},
    {path: '*', element:<NotFind/>, expect:true}
]