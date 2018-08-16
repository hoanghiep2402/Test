import React, {Fragment} from 'react';
import classes from './ProductControl.css';

const ProductControl=(props)=>{
    return(
        <Fragment>
            <div className={classes.ProductControl}>
                <p>Your Selection</p>
                <div className={classes.SelectedFilter}>
                   <input type="checkbox" />
                </div>

            </div>
            <div className={classes.Category}>
                <h4>Thương hiệu</h4>
                <p>Samsung</p>
                <p>Apple</p>
                <p>Asus</p>
            </div>
        </Fragment>
    )
};


export default ProductControl