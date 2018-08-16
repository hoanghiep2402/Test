import React, {Fragment} from 'react';
import classes from './Promotion.css';
import arrow from '../../../assets/images/arrow.png';

const Promotion=(props)=>(
    <Fragment>
        <div className={classes.Promotion} >
                <span onClick={props.openModalPolicy}>
            <i className="fas fa-truck"/>
            Free Shipping and Return   <img alt="Chính sách" src={arrow}/>
                </span>
        </div>

    </Fragment>
);

export default Promotion;