import React from 'react';
import {Route,Link} from 'react-router-dom';
import Logo from '../../../Logo/Logo';
import classes from './Menu.css';



const MenuLink=({label, to, activeOnlyWhenExact})=>(
    <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => (

                <li>
                    <Link className={classes.MenuLink} to={to}>{label}</Link>
                </li>
        )}
    />
);


const menus=[
    {
        path:'/',
        exact:true,
        label:<Logo />
    },
    {
        path:'/cellphones',
        exact:true,
        label:'Di động'
    },
    {
        path:'/tablets',
        exact:true,
        label:'Máy tính bảng'
    },
    {
        path:'/laptops',
        exact:true,
        label:'Laptop'
    },
    {
        path:'/support',
        exact:true,
        label:'Hỗ trợ'
    }

];

const Menu=(props)=>{
    return(
        <ul className={classes.Menu}>
            {showMenus(menus)}
        </ul>
    )
};

function showMenus(menus){
    var result=null;
    if (menus.length>0){
        result=menus.map((menu,i)=>{
            return  (  <MenuLink
                key={i}
                label={menu.label}
                to={menu.path}
                activeOnlyWhenExact={menu.exact}/>)
        })
    }
    return result;
};


export default Menu;