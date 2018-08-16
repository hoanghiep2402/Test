import React, {Fragment} from 'react';
import classes from './Modal.css'

const Modal=(props)=>{
    let modalClass=props.show?[classes.Modal,classes.show]:[classes.Modal,classes.close];
    return(
        <Fragment>
            <div className={modalClass.join(' ')}>
                {props.children}
            </div>
        </Fragment>
    )
};


export default Modal;