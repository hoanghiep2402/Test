import React, {Component} from 'react';
import classes from './Products.css';
import Breadcumd from "../../components/UI/Breadcum/Breadcum";
import ProductControl from "../../components/Products/ProductControl/ProductControl";
import ListProducts from "../../components/Products/ListProducts/ListProducts";


class Products extends Component{
    state={
        product:[
            {
                images:['https://cellphones.com.vn/apple-iphone-x-64-gb-cpo.html'],
                name: 'Iphone X',
                price: 20000000
            }
        ]
        ,search:{
            kind:''
        }
    };

    render() {
        const title=this.props.pathname.replace('/','');
        return (
            <div className={classes.Products}>

                <Breadcumd />

                <div className={classes.Title}>
                    <p>{title} <span>(1500 Products)</span></p>
                </div>

                <div className={classes.Control}>
                    <div className={classes.SidebarLeft}>

                         <ProductControl />

                    </div>

                    {/*List Product By search*/}
                    <ListProducts />
                </div>

            </div>

        );
    }

}

export default Products;