import React,{Component} from 'react';
import { withRouter,Link } from 'react-router-dom';
import classes from './Breadcum.css'


class Breadcum extends Component{


    render() {
        const {location}=this.props;
        return (
            <ul className={classes.breadcrumb}>
                <li><Link to="/">Home</Link></li>
                <li>{location.pathname} </li>
            </ul>
        );
    }

}



export default withRouter(Breadcum);

