import React,{Component} from 'react';
import Toolbar from './Toolbar/Toolbar';
import HeaderTop from './HeaderTop/HeaderTop';
import Promotion from './Promotion/Promotion';
import Modal from '../UI/Modal/Modal';
import Policy from './Policy/Policy';
import BackDrop from '../UI/BackDrop/BackDrop';
import classes from './Header.css';

class Header extends Component{
        state={
            show:false
        };
    closeModalHandler=()=>{
      this.setState({show:false})
    };

    openModalHandler=()=>{
        this.setState({show:true})
    };


    render() {
        let {show}=this.state;
        return (
            <div className={classes.Header}>
                <HeaderTop/>
                <Toolbar />
                <Promotion openModalPolicy={this.openModalHandler}/>

                <BackDrop
                    show={show}
                    closeModal={this.closeModalHandler}
                />
                    <Modal show={show}>
                       <Policy closeModal={this.closeModalHandler}/>
                    </Modal>

            </div>
        );
    }

};


export default Header;