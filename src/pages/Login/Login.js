import React,{Component} from 'react';
import  './Login.css';
import classes from './Login.css';
import Breadcum from "../../components/UI/Breadcum/Breadcum";


class Login extends Component{

    render() {

        return (

            <div className={classes.Login}>
                <Breadcum />
            </div>
        );
    }
}

export default Login;