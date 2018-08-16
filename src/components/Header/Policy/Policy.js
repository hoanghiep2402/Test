import React, {Fragment} from 'react';
import classes from './Policy.css';

const Policy=(props)=>(
    <Fragment>
        <div className={classes.CardHeader}>
            <h2>FREE SHIPPING AND FREE RETURNS</h2>
            <i className="fas fa-times" onClick={props.closeModal}></i>
        </div>
        <div className={classes.CardBody}>
            {`FREE SHIPPING AND FREE RETURNS
            This limited time free shipping offer is good for free shipping, discount applied at checkout. See delivery method in checkout for estimated delivery date. Offer does not apply to adidas gift cards and mi adidas customizations. Valid on domestic U.S. orders only. adidas reserves the right to change or end promotions at any time..

            If you are not completely satisfied with your adidas.com purchase, for any reason, we will offer you a free return within 30 days of purchase.

            *Because custom and personalized mi adidas products are made just for you, they are not returnable.

            Please note to utilize free returns on adidas.com, the package must be sent from physically within the United States. Please note that the return label is not valid through USPS for APO/FPO returns. Check out our Return Policy for more details.`}
        </div>
    </Fragment>
);

export default Policy;