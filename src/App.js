import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/navbar/Navbar";
import "./styles/App.css";
import { AuthContext } from './context'
function App() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(()=>{
        if(localStorage.getItem('auth')){
            setIsAuth(true)
        }
        else{
            setIsAuth(false)
        }
    },[])
    return (
        <AuthContext.Provider
            value={{
                isAuth,
                setIsAuth
            }}>
            <BrowserRouter>
                <Navbar />
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
