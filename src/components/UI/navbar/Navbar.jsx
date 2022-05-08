import React, { useContext } from 'react';
import classes from './Navbar.module.css'
import { Link } from "react-router-dom";
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context';

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className={classes.navbar}>
            <MyButton
                onClick={logout}
            >Выйти</MyButton>
            <div className={classes.navbar__links}>
                <Link to="/about" className={classes.navbar__links_link}>About</Link>
                <Link to="/posts" className={classes.navbar__links_link}>Posts</Link>
                <Link to="/login" className={classes.navbar__links_link}>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;