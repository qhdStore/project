import React from "react";


import { Router, Route } from 'dva/router';

import Index from "./columns/index/Index";
import SaleIndex from "./columns/sale/SaleIndex";
import OrderIndex from "./columns/order/OrderIndex";
import PeopleIndex from "./columns/people/PeopleIndex";
import Dabiao from "./columns/sale/Dabiao";
import Sousuo from "./columns/sale/Sousuo";
import Sisdian from "./columns/sale/Sisdian";

export default ({history}) => {
    return <Router history={history}>
       <div>
            <Route path="/" exact component={Index} />
            <Route path="/sale" exact component={SaleIndex} />
            <Route path="/sale/dabiao" component={Dabiao} />
            <Route path="/sale/sousuo" component={Sousuo} />
            <Route path="/sale/sisdian" component={Sisdian} />
            
            <Route path="/people" component={PeopleIndex} />
       </div>
    </Router>
}