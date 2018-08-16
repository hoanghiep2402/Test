import React from 'react';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Products from '../pages/Products/Products';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import Support from '../pages/Support/Support';
import NotFoundPage from '../pages/NotFound/NotFound';


const routes=[
    {
        path:'/',
        exact:true,
        main: ()=><Home/>
    },
    {
        path:'/cellphones/',
        exact:false,
        main: ({location})=><Products {...location}/>
    },
    {
        path:'/tablets/',
        exact:false,
        main: ({location})=><Products {...location}/>
    },
    {
        path:'/laptops/',
        exact:false,
        main: ({location})=><Products {...location}/>
    },
    {
        path:'/:kind/:id',
        exact:false,
        main: ()=><ProductDetail />
    },
    {
        path:'/support',
        exact:true,
        main: ()=><Support/>
    },
    {
        path:'/login',
        exact:false,
        main: ()=><Login/>
    },
    {
        path:'',
        exact:false,
        main: ()=><NotFoundPage/>
    }
];

export default routes;