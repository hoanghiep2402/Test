import React from 'react';
import classes from './Toolbar.css';
import Menu from './Menu/Menu';
import Search from './Search/Search';


const Toolbar =(props)=>{

    return(
        <div className={classes.Toolbar}>
            <span className={classes.Logo__Menu__Content}>
                <Menu />
            </span>


            <Search />
        </div>
    )
};

export default Toolbar;