import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import classes from './LoginButton.css'

const LoginButton=(props)=>{
    let username=props.username||'Login';
    return(
        <Fragment >
                <Link className={classes.LoginButton} to="/login" >
                    <i className="fas fa-user fa-xs"></i><span className={classes.Username}>{username}</span>

                </Link>

        </Fragment>
    )
};

export default LoginButton;