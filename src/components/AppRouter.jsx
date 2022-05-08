import React from 'react';
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../route/index";

const AppRouter = () => {
    const isAuth = true;
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        exact={route.exact} />
                )}
            </Routes>
            :
            <Routes>

                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        exact={route.exact} />
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