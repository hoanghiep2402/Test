import React from 'react';
import classes from './ListProducts.css';

const ListProducts=(props)=>{
    return(
        <div className={classes.ListProducts}>

            <form  className={classes.pagingTop}>
               <select >
                   <option>A-Z</option>
                   <option>Z-A</option>
                   <option>Price (low-high)</option>
                   <option>Price (high-low)</option>
               </select>

                <span>Page {props.currentPage||1}</span>

                <div>
                    <select >
                        <option>Page 1</option>
                        <option>Page 2</option>
                        <option>Page 3</option>
                    </select>
                    <span> of 4 </span>
                    <i className="fas fa-chevron-circle-left"></i>
                    <i className="fas fa-chevron-circle-right"></i>
                </div>
                </form>
            <div>

            </div>
        </div>
    )
};

export default ListProducts;