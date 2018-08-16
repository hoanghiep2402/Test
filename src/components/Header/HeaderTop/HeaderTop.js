import React from 'react';
import LoginButton from './LoginButton/LoginButton'
import classes from './HeaderTop.css';

const HeaderTop=(props)=>(
    <div className={classes.HeaderTop}>
        <span >
            <LoginButton />
            &#124;
            <i className="far fa-heart fa-xs"></i>

            <i className="fas fa-shopping-cart"></i>
        </span>

    </div>
);

export default HeaderTop;