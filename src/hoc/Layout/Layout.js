import React, {Component, Fragment} from 'react';
import Header from '../../components/Header/Header';
 import Footer from '../../components/Footer/Footer';
import classes from './Layout.css';

class Layout extends Component{

    render() {
        return (
            <Fragment>
                <Header/>

                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <Footer/>

            </Fragment>
        );
    }

}

export default Layout;