import React from 'react';
import classes from './MyButton.module.css'
const MyButton = ({ children, ...props }) => {
    return (
        // <button disabled={disabled} className={classes.myButton}>
        //     {children}
        // </button> 
        <button {...props} className={classes.myButton}>
            {children}
        </button>
    );
};

export default MyButton;