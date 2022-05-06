import React from 'react';
import classes from './Navbar.module.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.navbar__links}>
                <Link to="/about" className={classes.navbar__links_link}>About</Link>
                <Link to="/posts" className={classes.navbar__links_link}>Posts</Link>
            </div>
        </div>
    );
};

export default Navbar;