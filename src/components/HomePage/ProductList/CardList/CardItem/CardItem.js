import React,{Component} from 'react';
import img from '../../../../../assets/images/s9plus-purple_1.jpg';
import classes from './CardItem.css';
import Button from '../../../../UI/Button/Button';


class CardItem extends Component{

    onViewProductDetail=(data)=>{
        this.props.onViewProductDetail(data);
    }

    render() {
        return (
            <div className={classes.CardItem}>
                <img src={this.props.product.images[0]} alt="img"/>
                <p>{this.props.product.name}</p>
                <span>{this.props.product.price.toLocaleString('it-IT')}</span>
                <div className={classes}>

                    <button
                        onClick={()=>this.onViewProductDetail(this.props.product)}
                        // btnType="hoverButton">
                        >
                        Xem chi tiết

                    </button>


                    <Button btnType="Primary">
                        <i className="fas fa-shopping-cart"></i>

                    </Button>

                </div>

            </div>

        );
    }

}


export default CardItem