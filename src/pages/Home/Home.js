import React, {Component, Fragment} from 'react';
import BannerTop from '../../components/HomePage/BannerTop/BannerTop';
import apiCaller from "../../ultils/apiCaller";
import CardList from "../../components/HomePage/ProductList/CardList/CardList";
import CardItem from "../../components/HomePage/ProductList/CardList/CardItem/CardItem";
import Modal from "../../components/UI/Modal/Modal";


class Home extends Component{

    state={
            cellphones:[],
            tablets:[],
            laptops:[],
    };

    componentDidMount(){

        apiCaller.get('/products?model=cellphone&limit=6').then(res=>{
           this.setState({cellphones:res.data})
        });
        apiCaller.get('/products?model=laptop&limit=6').then(res=>{
            this.setState({laptops:res.data})
        });
        apiCaller.get('/products?model=tablet&limit=6').then(res=>{
            this.setState({tablets:res.data})
        });

    }

    viewProductDetail=(product)=>{
        console.log(product)
    };

    render() {
        const {cellphones,laptops,tablets}=this.state;
        return (
            <Fragment>

                <BannerTop />

                <CardList path="cellphones" title="Điện thoại">
                    {this.renderProduct(cellphones)}
                </CardList>
                <CardList path="tablets" title="Tablets">
                    {this.renderProduct(tablets)}
                </CardList>
                <CardList path="laptops" title="Laptops">
                    {this.renderProduct(laptops)}
                </CardList>


                {/*<Modal show>*/}

                {/*</Modal>*/}
            </Fragment>

        );
    }
    renderProduct(products){
        let result=null;
        result=products.map((data,i)=>{
            return <CardItem
                key={i}
                product={data}
                onViewProductDetail={this.viewProductDetail}
            />
        });
        return result;
    }
}

export default Home;