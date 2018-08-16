import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import {Switch,Route} from 'react-router-dom';
import routes from './constants/routes';

class App extends Component {
  render() {
    return (
        <Layout>
            {this.showContentMenus(routes)}
        </Layout>
    );
  }
    showContentMenus=(routes)=>{
        var result=null;

        if (routes.length>0){
            result=routes.map((route,i)=>{
                return  <Route key={i} path={route.path} exact={route.exact} component={route.main}/>
            })
        }
        return <Switch>{result}</Switch>;
    }
}

export default App;
