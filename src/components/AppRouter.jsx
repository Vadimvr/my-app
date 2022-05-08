import React, { useContext } from 'react';
import { Route, Routes } from "react-router-dom";
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes } from "../router/index";

const AppRouter = () => {

    const {isAuth,setIsAuth} =useContext(AuthContext);
    console.log(isAuth)
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        exact={route.exact}
                        key = {route.path} />
                )}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        exact={route.exact} 
                        key = {route.path} />
                )}
            </Routes>
    );
};

export default AppRouter;
{/* 
<Route path="About" element={<About />} />
<Route exact path="Posts" element={<Posts />} />
<Route exact path="Posts/:id" element={<PostIdPage />} />
<Route path="*" element={<NotFind />} /> */}