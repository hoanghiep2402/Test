import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Bgheader from '../../../../assets/images/heading-bg.jpg';
import classes from './CardList.css';

class CardList extends Component{


    render() {

       const {path,title,children}=this.props;
        return (
            <div className={classes.CardList}>

                <div className={classes.CardList__Header}>
                    <Link to={path}>{title}</Link><img alt="bg-header" src={Bgheader} />
                </div>

                <div className={classes.CardList__Body}>
                    <div className={classes.CardList__Items}>
                        {children}
                    </div>
                </div>

            </div>
        );
    }

}



export default CardList;