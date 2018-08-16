import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Footer.css'

const footer =(props)=>{
    return(
        <div className={classes.Footer}>
            <div>
                <Link to='/cellphones' >
                    Điện thoại
                </Link>
                <Link to='/tablets' >
                    Máy tính bảng
                </Link>
                <Link to='/laptops' >
                    Máy tính xách tay
                </Link>
                <Link to='/support' >
                    Hỗ trợ
                </Link>
            </div>

            <div>
                <a href='https://www.google.com/'><i className="fab fa-google fa-xs"></i></a>
                <a href='https://www.google.com/'><i className="fab fa-google-plus-g fa-1x"></i></a>
                <a href='https://www.facebook.com/'><i className="fab fa-facebook-f"></i></a>
                <a href='https://www.facebook.com/'><i className="fab fa-instagram"></i></a>
            </div>


        </div>
    )
};

export default footer;